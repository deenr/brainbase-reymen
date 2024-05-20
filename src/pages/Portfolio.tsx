import { ProjectPreview } from '../components/Landing/ProjectPreview';

export function Portfolio() {
  const projects = [
    {
      imageUrl:
        'https://images.adsttc.com/media/images/5efa/aef8/b357/6595/b800/00d2/newsletter/feature.jpg?1593487089',
      name: 'Opera center',
      completed: 'Completed on August 2020',
      location: 'Old Tbilisi',
    },
    {
      imageUrl:
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/465241642.jpg?k=80297ca67a17ca3bef3a085c228155ab76d60f55e281241415bfd3171ebe42f2&o=&hp=1',
      name: 'Axis towers',
      completed: 'Completed on June 2022',
      location: 'Saburtalo',
    },
    {
      imageUrl:
        'https://bm.ge/uploads/files/2022/02/17/188926/620e14ee347b7_w_h.jpeg',
      name: 'MLN Hotel-Conference Center',
      completed: 'Completed on August 2023',
      location: 'Sololaki',
    },
    {
      imageUrl:
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/465241642.jpg?k=80297ca67a17ca3bef3a085c228155ab76d60f55e281241415bfd3171ebe42f2&o=&hp=1',
      name: 'Axis towers',
      completed: 'Completed on June 2022',
      location: 'Saburtalo',
    },
    {
      imageUrl:
        'https://bm.ge/uploads/files/2022/02/17/188926/620e14ee347b7_w_h.jpeg',
      name: 'MLN Hotel-Conference Center',
      completed: 'Completed on August 2023',
      location: 'Sololaki',
    },
    {
      imageUrl:
        'https://images.adsttc.com/media/images/5efa/aef8/b357/6595/b800/00d2/newsletter/feature.jpg?1593487089',
      name: 'Opera center',
      completed: 'Completed on August 2020',
      location: 'Old Tbilisi',
    },
    {
      imageUrl:
        'https://images.adsttc.com/media/images/5efa/aef8/b357/6595/b800/00d2/newsletter/feature.jpg?1593487089',
      name: 'Opera center',
      completed: 'Completed on August 2020',
      location: 'Old Tbilisi',
    },
    {
      imageUrl:
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/465241642.jpg?k=80297ca67a17ca3bef3a085c228155ab76d60f55e281241415bfd3171ebe42f2&o=&hp=1',
      name: 'Axis towers',
      completed: 'Completed on June 2022',
      location: 'Saburtalo',
    },
    {
      imageUrl:
        'https://bm.ge/uploads/files/2022/02/17/188926/620e14ee347b7_w_h.jpeg',
      name: 'MLN Hotel-Conference Center',
      completed: 'Completed on August 2023',
      location: 'Sololaki',
    },
    {
      imageUrl:
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/465241642.jpg?k=80297ca67a17ca3bef3a085c228155ab76d60f55e281241415bfd3171ebe42f2&o=&hp=1',
      name: 'Axis towers',
      completed: 'Completed on June 2022',
      location: 'Saburtalo',
    },
    {
      imageUrl:
        'https://bm.ge/uploads/files/2022/02/17/188926/620e14ee347b7_w_h.jpeg',
      name: 'MLN Hotel-Conference Center',
      completed: 'Completed on August 2023',
      location: 'Sololaki',
    },
    {
      imageUrl:
        'https://images.adsttc.com/media/images/5efa/aef8/b357/6595/b800/00d2/newsletter/feature.jpg?1593487089',
      name: 'Opera center',
      completed: 'Completed on August 2020',
      location: 'Old Tbilisi',
    },
  ];

  return (
    <>
      <header className="flex flex-col md:flex-row gap-5 md:gap-32 justify-between md:items-center bg-gray-100 py-8 md:py-24 px-4 md:px-12 lg:px-28">
        <div className="w-fit flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-primair-500 md:text-5xl uppercase">
            Portfolio
          </h1>
          <div className="w-full h-1 bg-primair-500"> </div>
        </div>
        <p className="max-w-xl text-md text-gray-500">
          Verken mijn diversiteit aan villa's, huizen en appartementen, elk met
          unieke stabiliteitsstudies.
        </p>
      </header>
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-12 md:py-24 md:pt-20 px-4 md:px-12 lg:px-28">
        {projects.map((project, index) => (
          <div key={index} className="w-full h-96">
            <ProjectPreview {...project}></ProjectPreview>
          </div>
        ))}
      </section>
    </>
  );
}
