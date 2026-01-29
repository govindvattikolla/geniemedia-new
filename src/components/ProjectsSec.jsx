

const ProjectsSection = () => {
 


const projects = [
  {
    name: "Meera Basu",
    image: 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472599/meerabasuWebsite_l7hogy.png',
      url: "https://meerabasu.co.in/"
  },
  {
    name: "Avantta Gems",
    image: 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472593/AvanttaGems_ev34lv.png',
      url: "https://8z2bgt-68.myshopify.com/"
  },
  {
    name: "KNS Metal Solutions",
    image: 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472599/knsMetals_nxysu0.png',
      url: "https://knsmetalsolutions.com.au/"
  },
  {
    name: "Laserfold",
    image: 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472604/LaserFold_odqvne.png',
      url: "https://laserfold.com.au/"
  },
  {
    name: "GenieStudio",
    image: 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472603/GenieStudio_kn1fhj.png',
      url: "https://geniestudio.in/"
  },
  {
    name: "Buildzone",
    image: 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472604/buildzon_ktmkrc.png',
      url: "https://www.buildzonprojects.com/"
  }
];



  return (
    <>
     
 

     <section className="bg-white py-8 md:py-12" id='projects'>
      <div className="max-w-7xl mx-auto px-2">

       
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-700 mb-10">
          Our Portfolio
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">

          {projects.map((project, index) => (
            <div key={index} className="text-center group">

             
              <div className="bg-purple-400   rounded-3xl p-0 md:p-0.5  mb-8 transition-transform duration-300 group-hover:scale-105">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 boder-2 border-orange-500"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-6">
                {project.name}
              </h3>

             
              <button className="
                px-8 py-3 
                rounded-full 
                font-semibold 
                border-2 border-purple-800
                text-white 
                bg-gray-900
                hover:bg-purple-500
                hover:text-black
                transition-all duration-300
              " onClick={()=> window.open(project.url, "_blank")}>
                VIEW PROJECT
              </button>

            </div>
            
          ))}
        </div>
        
     
     

      </div>
       
    </section>

    

   
    </>
  );
};

export default ProjectsSection;