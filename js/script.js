// DOMContentLoaded 이벤트 리스너: 문서의 모든 내용이 로드된 후 스크립트 실행
document.addEventListener('DOMContentLoaded', () => {
    // 햄버거 메뉴 토글 기능
    const hamburgerButton = document.querySelector('.hamburger');
    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', () => {
            // 'nav ul' 요소에 'active' 클래스를 토글하여 메뉴를 보이거나 숨깁니다.
            document.querySelector('nav ul').classList.toggle('active');
        });
    }

    // URL 파라미터를 읽어와서 특정 폼을 활성화하는 기능
    const urlParams = new URLSearchParams(window.location.search);
    const tabFromUrl = urlParams.get('tab');

    // 문의 페이지 폼 토글 기능
    const inquiryButtons = document.querySelectorAll('.toggle-buttons button');
    const formContainers = document.querySelectorAll('.form-container');

    if (inquiryButtons.length > 0) {
        // 모든 폼 탭 버튼에 클릭 이벤트 리스너 추가
        inquiryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // 모든 버튼과 폼 컨테이너의 'active' 클래스 제거
                inquiryButtons.forEach(b => b.classList.remove('active'));
                formContainers.forEach(f => f.classList.remove('active'));

                // 클릭된 버튼과 해당 폼 컨테이너에 'active' 클래스 추가
                btn.classList.add('active');
                const targetFormId = `form-${btn.id.split('-')[1]}`; // 버튼 ID에서 폼 ID 추출
                document.getElementById(targetFormId).classList.add('active');
            });
        });

        // URL에 'tab' 파라미터가 있을 경우, 해당 탭을 활성화
        if (tabFromUrl) {
            const targetButton = document.getElementById(`btn-${tabFromUrl}`);
            if (targetButton) {
                targetButton.click(); // 버튼 클릭 이벤트를 강제로 발생시켜 폼 전환
            }
        }
    }

    // 제품 소개 페이지 탭 기능
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // 모든 탭 버튼에서 'active' 클래스 제거
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                // 클릭된 버튼에 'active' 클래스 추가
                btn.classList.add('active');

                // 모든 탭 콘텐츠에서 'active' 클래스 제거
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                // data-tab 속성 값과 일치하는 탭 콘텐츠에 'active' 클래스 추가
                document.getElementById(btn.dataset.tab).classList.add('active');
            });
        });
    }

    // Swiper 슬라이더 초기화 (index.html에서만 작동)
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

    // 모든 제품 이미지에 대한 호버 효과 적용
    const productHoverImages = document.querySelectorAll('.product-hover-image');
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
});
