export function VideoCard() {
    return <div>
        <img src="/photo1.png"></img>

        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <img className="rounded-full w-20 h-20" src="/logo.jpg" alt="" />
            </div>
            <div className="col-span-11 pl-5">
                <div>Real Madrid Win |
                in laliga
                </div>

                <div className="col-span-11 pl-5 text-gray-600 text-base">
                Ayush Mishra
            </div>

            <div className="col-span-11 pl-5 text-gray-600 text-base">
                100 Mn |
                10 days ago
            </div>


            </div>


        </div>


    </div>
    
}