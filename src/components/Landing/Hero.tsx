import { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
        <main className="flex flex-col gap-16 pt-16 px-4 md:pt-24 md:px-28">
          <div className="flex flex-col gap-6 justify-center">
            <h1 className="text-4xl font-semibold text-gray-900 md:text-6xl">Wij realiseren uw bouwdromen <br></br> met solide expertise</h1>
            <p className="text-lg	text-gray-500">
              Wij zijn uw betrouwbare partner voor nauwkeurige stabiliteitsstudies, <br></br> met expertise en toewijding zorgen wij voor een efficiënt bouwontwerp.
            </p>
          </div>
          <div className="flex flex-row flex-1 ">
            <div className="flex-1 h-96 bg-gray-400">Image 1</div>
          </div>
        </main>
    )
  }
}
