// VAR ***** ***** *****
const objList = [
    {
        title: "Work",
        img: "../asset/images/icon-work.svg",
        timeframes: {
            daily: {current: 5, previous: 7},
            weekly: {current: 32, previous: 36},
            monthly: {current: 103, previous: 128}
        }
    },
    {
        title: "Play",
        img: "../asset/images/icon-play.svg",
        timeframes: {
            daily: {current: 1, previous: 2},
            weekly: {current: 10, previous: 8},
            monthly: {current: 23, previous: 29}
        }
    },
    {
        title: "Study",
        img: "../asset/images/icon-study.svg",
        timeframes: {
            daily: {current: 0, previous: 1},
            weekly: {current: 4, previous: 7},
            monthly: {current: 13, previous: 19}
        }
    },
    {
        title: "Exercise",
        img: "../asset/images/icon-exercise.svg",
        timeframes: {
            daily: {current: 1, previous: 1},
            weekly: {current: 4, previous: 5},
            monthly: {current: 11, previous: 18}
        }
    },
    {
        title: "Social",
        img: "../asset/images/icon-social.svg",
        timeframes: {
            daily: {current: 1, previous: 3},
            weekly: {current: 5, previous: 10},
            monthly: {current: 21, previous: 23}
        }
    },
    {
        title: "Self Care",
        img: "../asset/images/icon-self-care.svg",
        timeframes: {
            daily: {current: 0, previous: 1},
            weekly: {current: 2, previous: 2},
            monthly: {current: 7, previous: 11}
        }
    }
];
const timeList = {daily: 'Day', weekly: 'Week', monthly: 'Month'};

// VAR ***** ***** *****



// FUNCTION ***** ***** *****
function RENDER_TO_DO(DOM, userTime) {
    [1,2,3].forEach( v => {$(`#btn${v}`).removeClass('active')} );
    $(DOM).addClass('active');
    let addElem = "";

    // Remove/Clear all ChildNode
    $("#CONTENT > *").remove();;

    // Create Element (Obj)
    objList.forEach( ({title, img, timeframes}, idx) => {
        addElem += `
            <section role="obj" class="obj idx${idx} bg-white grid pt-12 rounded-2xl overflow-hidden relative">
                <img src="${img}" alt="ICON" 
                    class="absolute top-[-8px] right-[8px]" />

                <div role="obj-main"
                    class="z-10 p-8 rounded-t-2xl bg-slate-800 grid gap-4 
                    hover:bg-slate-700 cursor-pointer
                    [&>span]:flex [&>span]:justify-between [&>span]:items-center
                    [&>span:last-child]:xl:grid">
                    
                    <span role="head" 
                        class="[&>b]:text-white [&>b]:text-[1.25rem]">
                        <b>${title}</b>
                        <button class="flex [&:hover>span]:bg-indigo-400
                            [&>span]:bg-white [&>span]:size-2 space-x-1 [&>span]:rounded-full">
                            <span></span><span></span><span></span> 
                        </button>
                    </span>

                    <span role="info-time" 
                        class="[&>p:first-child]:text-white [&>p:first-child]:text-[2.5rem] 
                        [&>p:first-child]:md:text-[3rem]">
                        <p>${timeframes[userTime].current}hrs</p>
                        <p>Last ${timeList[userTime]} - ${timeframes[userTime].previous}hrs</p>
                    </span>

                </div>
            </section>
        `;
    } );

    // Append Element
    $("#CONTENT").append(addElem);

}

// FUNCTION ***** ***** *****



// INPUT & ACTION ***** ***** *****
RENDER_TO_DO($("#btn3"), 'monthly')

// INPUT & ACTION ***** ***** *****

