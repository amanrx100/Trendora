import React from 'react';

const BlueBox = () => {
    return (
        <>
            <div className=' flex flex-wrap items-center justify-between gap-8 text-sm sm:text-base rounded border-2 border-dotted border-[#1E88A8] bg-[#E5F6FB] p-1 mb-8 mx-auto h-15 max-w-6xl'>
                <p class='flex-1 text-center text-cyan-600 font-medium sm:text-center'>
                    Super discount for your  <span className='font-semibold underline hover:caret-blue-600'>first purchase</span>
                </p>
                <div class="flex items-center gap-2">
                    <div class="bg-cyan-700 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1">
                        FREE25BAC
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h8m-4-4h4m-6-4h6M4 4h16v16H4V4z" />
                        </svg>
                    </div>
                </div>

                <p class="flex-1 sm:text-center  text-sm text-cyan-600">
                    Use discount code to get <span class="font-bold text-cyan-600">20%</span> discount for any item
                </p>
            </div>

        </>
    )
}
export default BlueBox;