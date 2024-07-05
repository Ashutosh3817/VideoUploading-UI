const EditVideo = () =>{
    return(
        <div className="min-h-screen flex items-center justify-center py-12 bg-gray-100">
            <div className="w-full max-w-4xl bg-white border rounded-lg p-8 shadow-lg">
                <div className="mb-6 text-center">
                    <a className="bg-blue-500 p-2 text-white rounded hover:bg-blue-700" href="/">Click Here to Watch Videos</a>
                </div>
                <div className="mb-6 shadow-sm border border-gray-300 rounded p-6 bg-gray-50">
                    <h3 className="text-3xl font-bold mb-6 text-center">Upload Your Video</h3>
                    <form onSubmit={createVideo}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-medium">Video Title</label>
                            <input type="text" id="title" name="title" placeholder="Enter title here" value={video.title}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tags" className="block text-gray-700 font-medium">Video Tags</label>
                            <input type="text" id="tags" name="tags" placeholder="Enter tags here" value={video.tags} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-medium">Video Description</label>
                            <textarea id="description" name="description" placeholder="Enter description here" value={video.description} onChange={fieldHandleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="video" className="block text-gray-700 font-medium mb-2">Select Video to Post:</label>
                            <input type="file" onChange={handleFileChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
                        </div>
                        <div className="mb-6 w-36 h-36 mx-auto">
                            <CircularProgressbar
                                strokeWidth={10}
                                value={singleProgress}
                                text={`${singleProgress}%`}
                                styles={buildStyles({
                                    rotation: 0.25,
                                    strokeLinecap: 'butt',
                                    textSize: '16px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgba(62, 152, 199, ${singleProgress / 100})`,
                                    textColor: '#3e98c7',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#f0f0f0'
                                })}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Upload Video
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditVideo;