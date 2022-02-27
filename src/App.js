import './App.css';
// import imgDesc from "./Asset/Img/image-header-desktop.jpg"
import mobileImg from "./Asset/Img/image-header-mobile.jpg"
function App() {

  const data = [
    {
      count : "10k+",
      title : "COMPANIES"
    },
    {
      count : "314",
      title : "TEMPLATES"
    },
    {
      count : "12M+",
      title : "QUERIES"
    }
  ]

  return (
    <div className="App bg-primary-main py-4 flex-center">

      <main className='bg-primary-card w-320px rounded-xl desc:max-w-5xl desc:w-full desc:flex-center desc:flex-row-reverse '>

        <figure className='rounded-t-xl bg-primary-accent desc:w-1/2 desc:rounded-r-lg desc:rounded-l-none'>
        <img src={mobileImg} alt="header-img" className='mix-blend-multiply desc:rounded-none'/>
        </figure>

        <article className='text-white mt-6  p-6 desc:w-1/2 desc:p-12'>
            <section className='text-center mb-8 desc:text-left'>
                <h1 className='text-3xl mb-4 font-med'>Get <span className='text-primary-accent'>insights</span> that help your business grow.</h1>
                <p className='text-neutral-para'>Discover the benefits of data analythics and make better decisions regarding revenue, customer experience, and overall efficiency</p>
            </section>

            <section className='flex-center flex-col desc:justify-between desc:flex-row'>
               {data.map(e =>{
                 return(
                   <div className=' black text-center mb-4'>
                        <h1 className='text-xl font-med'>{e.count}</h1>
                        <small className='text-neutral-para'>{e.title}</small>
                   </div>
                 )
               })}
            </section>
        </article>

      </main>
      </div>
  );
}

export default App;
