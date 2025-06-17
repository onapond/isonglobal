// script.js

// DOMContentLoaded 이벤트 리스너: 문서의 모든 내용이 로드된 후 스크립트 실행
document.addEventListener('DOMContentLoaded', () => {
    // 햄버거 메뉴 토글 기능
    const hamburgerButton = document.querySelector('.hamburger');
    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', () => {
            document.querySelector('nav ul').classList.toggle('active');
        });
    }

    // 제품 소개 페이지 탭 기능
    // .tab-btn 클래스를 가진 모든 버튼을 선택합니다.
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length > 0) {
        tabButtons.forEach(btn => {
            // 각 버튼에 클릭 이벤트 리스너를 추가합니다.
            btn.addEventListener('click', () => {
                // 현재 활성화된 모든 탭 버튼에서 'active' 클래스를 제거합니다.
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                // 클릭된 버튼에 'active' 클래스를 추가하여 활성화 상태로 만듭니다.
                btn.classList.add('active');

                // 현재 활성화된 모든 탭 콘텐츠에서 'active' 클래스를 제거합니다.
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                // 클릭된 버튼의 data-tab 속성 값을 ID로 사용하여 해당 탭 콘텐츠를 찾아 'active' 클래스를 추가합니다.
                document.getElementById(btn.dataset.tab).classList.add('active');
            });
        });
    }

    // 문의 페이지 폼 토글 기능
    const btnSubscription = document.getElementById('btn-subscription');
    const btnCatering = document.getElementById('btn-catering');
    const formSubscription = document.getElementById('form-subscription');
    const formCatering = document.getElementById('form-catering');

    // 주문 신청 버튼 클릭 시
    if (btnSubscription) {
        btnSubscription.addEventListener('click', () => {
            // 주문 신청 버튼 활성화, 케이터링 버튼 비활성화
            btnSubscription.classList.add('active');
            btnCatering.classList.remove('active');
            // 주문 신청 폼 활성화, 케이터링 폼 비활성화
            formSubscription.classList.add('active');
            formCatering.classList.remove('active');
        });
    }

    // 케이터링 신청 버튼 클릭 시
    if (btnCatering) {
        btnCatering.addEventListener('click', () => {
            // 케이터링 버튼 활성화, 주문 신청 버튼 비활성화
            btnCatering.classList.add('active');
            btnSubscription.classList.remove('active');
            // 케이터링 폼 활성화, 주문 신청 폼 비활성화
            formCatering.classList.add('active');
            formSubscription.classList.remove('active');
        });
    }

    // Swiper 슬라이더 초기화 (index.html에서만 필요)
    // Swiper 라이브러리가 로드되었는지 확인 후 초기화합니다.
    if (typeof Swiper !== 'undefined' && document.querySelector('.swiper-container')) {
        const swiper = new Swiper('.swiper-container', {
            loop: true, // 무한 루프
            autoplay: {
                delay: 5000, // 5초마다 자동 재생
                disableOnInteraction: false // 사용자 상호작용 후에도 자동 재생 지속
            },
            pagination: {
                el: '.swiper-pagination', // 페이지네이션 요소
                clickable: true // 클릭 가능하도록 설정
            },
            navigation: {
                nextEl: '.swiper-button-next', // 다음 버튼 요소
                prevEl: '.swiper-button-prev' // 이전 버튼 요소
            }
        });
    }

    // 모든 제품 이미지에 대한 호버 효과 적용 (아폴로, 피닉스, 베누스 등)
    // 'product-hover-image' 클래스를 가진 모든 이미지를 선택합니다.
    const productHoverImages = document.querySelectorAll('.product-hover-image');

    // 각 이미지에 대해 이벤트 리스너를 추가합니다.
    productHoverImages.forEach(image => {
        // 마우스가 이미지 위로 올라갔을 때
        image.addEventListener('mouseover', () => {
            const hoverSrc = image.dataset.hoverSrc; // data-hover-src 속성 값 가져오기
            if (hoverSrc) {
                image.src = hoverSrc; // 이미지 소스를 호버 이미지로 변경
            }
        });

        // 마우스가 이미지 밖으로 나갔을 때
        image.addEventListener('mouseout', () => {
            const originalSrc = image.dataset.originalSrc; // data-original-src 속성 값 가져오기
            if (originalSrc) {
                image.src = originalSrc; // 이미지 소스를 원본 이미지로 변경
            }
        });
    });

    // 커피백 이미지에 대한 호버 효과 적용 (케냐, 에티오피아, 과테말라, 커피백 세트)
    // 'coffee-bag-hover-image' 클래스를 가진 모든 이미지를 선택합니다.
    const coffeeBagHoverImages = document.querySelectorAll('.coffee-bag-hover-image');

    // 각 이미지에 대해 이벤트 리스너를 추가합니다.
    coffeeBagHoverImages.forEach(image => {
        // 마우스가 이미지 위로 올라갔을 때
        image.addEventListener('mouseover', () => {
            const hoverSrc = image.dataset.hoverSrc; // data-hover-src 속성 값 가져오기
            if (hoverSrc) {
                image.src = hoverSrc; // 이미지 소스를 호버 이미지로 변경
            }
        });

        // 마우스가 이미지 밖으로 나갔을 때
        image.addEventListener('mouseout', () => {
            const originalSrc = image.dataset.originalSrc; // data-original-src 속성 값 가져오기
            if (originalSrc) {
                image.src = originalSrc; // 이미지 소스를 원본 이미지로 변경
            }
        });
    });
