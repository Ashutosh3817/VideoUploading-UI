const PremiumSubscription = () =>{
    return(
        <div className="min-h-screen bg-gray-300 shadow-lg">
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-5 lg:px-8">
                <div className="text-center">
                    <h1 className="font-serif text-3xl font-bold mt-7 " >Premium Subscription</h1>
                   <p className="mt-2 text-lg text-gray-600">
                        Get started with a UploadVideo Subscription that works for you
                    </p>
                </div>
                {/* for plan 1 subscription */}
                <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className="border border-gray-400 min-h-80 shadow-md rounded-lg p-6 mt-3 mb-3">
                        {/* Monthly plan */}
                        <div className="flex items-start justify-start">
                        <h2 className="text-2xl font-semibold font-serif text-black mt-3 mb-5">Monthly</h2>
                        <p className="mt-3 mb-5 ml-3 text-sm font-mono text-gray-500"> billed Monthly  </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <h3>Down from 3$/Monthly</h3>
                            <span className="text-gray-500 font-medium">Access to Standard Features</span>
                            <span className="mt-4 font-bold text-2xl text-black ">$2</span>
                            <p className=" text-gray-500 " >/mo</p>
                          <button className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5">
                            Subscribe
                        </button>
                        </div>
                    </div>
                    {/* for plan 2 subsription */}
                    <div className="border border-gray-500 bg-gradient-to-r from-orange-100 to-orange-300 min-h-96 rounded-lg p-6">
                        {/* Yearly plan */}
                        <div className="flex items-start justify-start">
                            <h2 className="text-2xl font-semibold font-serif text-black mt-3 mb-5">Yearly</h2>
                            <span className="mt-3 mb-5 text-sm fonr-mono text-gray-500 ml-3">billed Yearly($30)</span>
                            
                        </div>
                        <div className="flex-col flex">
                                <span>Our <b>most popular plan</b> previously sold for $35 ans is now only <b>$2/month </b></span>
                                <span>This plan saves you over 60% in comparison to monthly plan </span>
                                <button className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5">
                                Subscribe
                                </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
 export default PremiumSubscription;
