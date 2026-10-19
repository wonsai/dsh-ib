/* =============================================
   대구서부고 IB DP 홍보 웹페이지 - JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  // === 1. 아코디언 토글 ===
  window.toggleAcc = function (btn) {
    const item = btn.closest('.acc-item');
    const isOpen = item.classList.contains('open');

    // 다른 열린 아코디언 닫기
    document.querySelectorAll('.acc-item.open').forEach(function (el) {
      if (el !== item) {
        el.classList.remove('open');
      }
    });

    // 현재 아코디언 토글
    item.classList.toggle('open', !isOpen);

    // 스크롤로 살짝 맞춰주기
    if (!isOpen) {
      setTimeout(function () {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  // === 2. 스티키 네비게이션 활성화 (스크롤 위치 기반) ===
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.sticky-nav ul li a');
  const backToTopBtn = document.getElementById('backToTop');

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // 맨 위로 버튼 표시/숨김
    if (scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // 현재 섹션 감지
    let currentSection = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentSection) {
        link.classList.add('active');
        // 활성 링크를 네비게이션 바 중앙으로 스크롤
        const nav = document.querySelector('.sticky-nav');
        const linkRect = link.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        const scrollLeft = link.offsetLeft - navRect.width / 2 + linkRect.width / 2;
        nav.scrollLeft = scrollLeft;
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // 초기 실행

  // === 3. 맨 위로 스크롤 ===
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // === 4. 네비게이션 링크 클릭 시 부드러운 스크롤 ===
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const stickyNavHeight = document.querySelector('.sticky-nav').offsetHeight;
          const targetTop = target.getBoundingClientRect().top + window.scrollY - stickyNavHeight - 10;
          window.scrollTo({ top: targetTop, behavior: 'smooth' });
        }
      }
    });
  });

  // === 5. 히어로 버튼 ===
  // 카카오톡 상담 신청 외부 링크로 이동 (기본 동작 유지 — 스크롤 가로챔 제거)

  // === 6. 평가 바 애니메이션 (Intersection Observer) ===
  const evalFills = document.querySelectorAll('.eval-fill');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const targetWidth = fill.style.width;
        fill.style.width = '0%';
        requestAnimationFrame(function () {
          setTimeout(function () {
            fill.style.width = targetWidth;
          }, 50);
        });
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });

  evalFills.forEach(function (fill) {
    // 초기에는 숨겨뒀다가 보일 때 애니메이션
    const origWidth = fill.style.width;
    fill.dataset.targetWidth = origWidth;
    observer.observe(fill);
  });

  // === 7. 섹션 페이드인 애니메이션 ===
  const sectionBodies = document.querySelectorAll('.section-body, .section-header');

  const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sectionBodies.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeObserver.observe(el);
  });

  // === 8. 첫 번째 아코디언 기본 열기 ===
  const firstAcc = document.querySelector('.acc-item');
  if (firstAcc) {
    firstAcc.classList.add('open');
  }

  // === 9. 터치 기기에서 카드 터치 피드백 ===
  const touchCards = document.querySelectorAll('.value-card, .predp-card, .facility-item, .lp-item');
  touchCards.forEach(function (card) {
    card.addEventListener('touchstart', function () {
      card.style.transform = 'scale(0.97)';
    }, { passive: true });
    card.addEventListener('touchend', function () {
      setTimeout(function () { card.style.transform = ''; }, 150);
    }, { passive: true });
  });

  console.log('대구서부고 IB DP 웹페이지 로드 완료 ✅');
});

// === 시설 사진 모달 ===
window.openFacilityModal = function(title, imgSrc) {
  const modal = document.getElementById('facilityModal');
  document.getElementById('facilityModalTitle').textContent = title;
  document.getElementById('facilityModalImg').src = imgSrc;
  document.getElementById('facilityModalImg').alt = title;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeFacilityModal = function(e) {
  if (e && e.target !== document.getElementById('facilityModal') &&
      !e.target.classList.contains('facility-modal-close') &&
      !e.target.closest('.facility-modal-close')) return;
  const modal = document.getElementById('facilityModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') window.closeFacilityModal({ target: document.getElementById('facilityModal') });
});
