import { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
        <section className="flex flex-row gap-16 py-16 px-4 bg-gray-50 md:py-24 md:px-28">
            <div className='flex flex-col'>
                <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Structurele analyse</h2>
                <p className="text-lg text-gray-500 mt-2">Elk ontwerp wordt onder de loep genomen om zekerheid te bieden over veiligheid en duurzaamheid, zonder afbreuk te doen aan esthetiek.</p>
                <div className="h-64 bg-gray-400 mt-6">image 2</div>
            </div>
            <div className='flex flex-col'>
                <div className="h-64 bg-gray-400">image 3</div>
                <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl mt-6">Ontwerp realisatie</h2>
                <p className="text-lg text-gray-500 mt-2">Wij vertalen uw dromen in concrete plannen, met voortdurende dialoog om te zorgen dat het eindresultaat uw oorspronkelijke visie weerspiegelt en zelfs versterkt.</p>
            </div>
        </section>
    )
  }
}
