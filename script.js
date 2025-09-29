// פונקציונליות כפתור הטלפון מטופלת ישירות ב-HTML

// פונקציונליות כפתור וואטסאפ
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsappButton');
    
    // יש לעדכן עם מספר הטלפון האמיתי
    const phoneNumber = '972XXXXXXXXX'; // תבנית: קידומת מדינה ללא הסימן +
    const message = 'היי, אני מעוניין/ת לקבוע תור לעיצוב שיער.';
    
    whatsappButton.addEventListener('click', function(e) {
        e.preventDefault();
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});

// אנימציות פשוטות בגלילה
document.addEventListener('DOMContentLoaded', function() {
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-item, .gallery-item, .testimonial-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // הגדרת סגנונות התחלתיים
    const elementsToAnimate = document.querySelectorAll('.service-item, .gallery-item, .testimonial-item');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // הפעלה בעת גלילה וטעינה ראשונית
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // הפעלה בטעינת העמוד
});
