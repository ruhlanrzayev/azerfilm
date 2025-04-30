$(() => {
    // FAQ jQuery
    let firstQuestion = $('#faqFirstQuestion');
    let firstAnswer = $('#faqFirstAnswer');
    let secondQuestion = $('#faqSecondQuestion');
    let secondAnswer = $('#faqSecondAnswer');
    let thirdQuestion = $('#faqThirdQuestion');
    let thirdAnswer = $('#faqThirdAnswer');
    let fourthQuestion = $('#faqFourthQuestion');
    let fourthAnswer = $('#faqFourthAnswer');
    let fifthQuestion = $('#faqFifthQuestion');
    let fifthAnswer = $('#faqFifthAnswer');
    let sixthQuestion = $('#faqSixthQuestion');
    let sixthAnswer = $('#faqSixthAnswer');
    let seventhQuestion = $('#faqSeventhQuestion');
    let seventhAnswer = $('#faqSeventhAnswer');

    function toggleAnswer(question, answer) {
        question.click(function () {
            answer.slideToggle('auto');
        })
    }

    toggleAnswer(firstQuestion, firstAnswer);
    toggleAnswer(secondQuestion, secondAnswer);
    toggleAnswer(thirdQuestion, thirdAnswer);
    toggleAnswer(fourthQuestion, fourthAnswer);
    toggleAnswer(fifthQuestion, fifthAnswer);
    toggleAnswer(sixthQuestion, sixthAnswer);
    toggleAnswer(seventhQuestion, seventhAnswer);

    // Responsive jQuery
    let barsIcon = $('#barsIcon');
    let pcOptions = $('#pcOptions');
    let mobileOptions = $('#mobileOptions')

    barsIcon.click(function () {
        pcOptions.slideToggle('auto');
        mobileOptions.slideToggle('auto');
    })

    function resizeCheck() {
        if (window.innerWidth > 768) {
            const pcOptions = document.getElementById('pcOptions');
            const mobileOptions = document.getElementById('mobileOptions');
            if (mobileOptions) {
                mobileOptions.style.display = 'none'; 
            }
            if (pcOptions) {
                pcOptions.style.display = 'none'; 
            }
        }
    }
    $(window).on('load', resizeCheck);
    $(window).on('resize', resizeCheck);
    
})