

export default function Cards() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl w-full">
          {/* Top Left Section */}
          <div className="bg-red-800 text-white p-6 sm:p-10 flex items-center justify-center h-80">
            <h1 className="text-3xl font-bold">Magazee</h1>
          </div>
  
          {/* Top Right Section */}
          <div className="bg-white p-6 sm:p-10 flex items-center">
            <p className="text-gray-600 italic">
              "Ut sit amet augue elit. Vivamus eget tortor in ante scelerisque gravida. Vestibulum auctor condimentum sem."
            </p>
          </div>
  
          {/* Bottom Left Section */}
          <div className="bg-white p-6 sm:p-10 flex flex-col justify-between h-80">
            <div>
              <h2 className="text-2xl font-semibold text-red-800 mb-4">Fusce ac enim at justo</h2>
              <p className="text-gray-700">
                Pellentesque sagittis feugiat massa, vitae blandit elit dictum in. Nam eleifend nunc dui, sed cursus justo molestie id. Vestibulum vel sagittis justo.
              </p>
            </div>
            <div className="flex justify-end">
              <button className="mt-6 px-6 py-3 w-full sm:w-40 bg-red-800 text-white font-semibold rounded hover:bg-red-700">
                READ MORE
              </button>
            </div>
          </div>
  
          {/* Bottom Right Section */}
          <div className="bg-red-800 text-white p-6 sm:p-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white overflow-hidden mb-4">
              {/* Replace with an image */}
              <img
                src="logo.avif"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              Nullam eleifend, ipsum eu aliquet fermentum, odio urna dignissim ante, semper maximus libero nisi non nibh.
            </p>
          </div>
  
          {/* Image Section */}
          <div className="bg-gray-100 p-6 sm:p-10 flex items-center">
            <img
              src="images5.jfif"
              alt="Beautiful Landscape"
              className="w-full h-auto object-cover rounded"
            />
          </div>
  
          {/* Informative Card Section */}
          <div className="bg-white p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-red-800 mb-4">Loerm ipsum dolor sit amet</h2>
              <p className="text-gray-700">
                This is a one-page HTML5 template that you can use for any purpose. Please tell your friends about TemplateMo website. Thank you.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="mt-6 px-6 py-3 w-full sm:w-40 bg-red-800 text-white font-semibold rounded hover:bg-red-700">
                READ MORE
              </button>
            </div>
          </div>
  
          {/* Another Informative Card */}
          <div className="bg-white p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-red-800 mb-4">Nullam auctor ornare finibus</h2>
              <p className="text-gray-700 mb-4">
                Cras eu dolor lorem. Cras justo mauris, rhoncus in mauris ac, pellentesque pulvinar metus. Suspendisse consectetur consequat diam, ac dignissim mauris gravida vitae.
              </p>
              <p className="text-gray-700">
                Fusce porta lectus vel elit condimentum porttitor. Maecenas at quam congue, sollicitudin risus quis, ultricies enim.
              </p>
            </div>
            <div className="flex justify-end">
              <button className="mt-6 px-6 py-3 w-full sm:w-40 bg-red-800 text-white font-semibold rounded hover:bg-red-700">
                READ MORE
              </button>
            </div>
          </div>
  
          {/* Another Image Section */}
          <div className="bg-gray-100 p-6 sm:p-10 flex items-center">
            <img
              src="images1.jfif"
              alt="Nature"
              className="w-full h-auto object-cover rounded"
            />
          </div>
  
          {/* Pricing Section */}
          <div className="col-span-1 sm:col-span-2 bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Image */}
              <div className="flex items-center justify-center">
                <img
                  src="images1.jfif"
                  alt="Nature"
                  className="w-full h-full object-cover rounded"
                />
              </div>
  
              {/* Pricing Plans */}
              <div className="bg-white text-black p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">Standard Plan</h3>
                <p className="text-3xl font-bold mb-6">$25 per month</p>
                <ul className="space-y-2 mb-6">
                  <li>Vel eleifend enim</li>
                  <li>Morbi blandit metus</li>
                  <li>Fusce porta lectus vel elit</li>
                  <li>Cras eu dolor lorem</li>
                  <li>Pharetra et sapien</li>
                  <li>Quisque auctor non magna</li>
                </ul>
                <button className="w-full px-6 py-3 bg-teal-700 text-white font-semibold rounded hover:bg-teal-600">
                  BUY NOW
                </button>
              </div>
  
              <div className="bg-white text-black p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">Advanced Plan</h3>
                <p className="text-3xl font-bold mb-6">$40 per month</p>
                <ul className="space-y-2 mb-6">
                  <li>Vel eleifend enim</li>
                  <li>Morbi blandit metus</li>
                  <li>Fusce porta lectus vel elit</li>
                  <li>Cras eu dolor lorem</li>
                  <li>Pharetra et sapien</li>
                  <li>Quisque auctor non magna</li>
                </ul>
                <button className="w-full px-6 py-3 bg-teal-700 text-white font-semibold rounded hover:bg-teal-600">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  