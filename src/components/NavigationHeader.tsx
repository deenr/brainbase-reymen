import { Component } from 'react'
import logo from '../assets/logo.svg'


export default class NavigationHeader extends Component {
  render() {
    return (
      <header className="flex flex-row justify-between items-center py-5 px-28 border-b-[1px] border-gray-100">
        <img src={logo} className="w-fit h-[20px]"></img>
        <nav>
            <ul className="flex flex-row gap-8">
                <li className="text-md text-semibold text-gray-400">Home</li>
                <li className="text-md text-semibold text-gray-400" >Over ons</li>
                <li className="text-md text-semibold text-gray-400">Projecten</li>
                <li className="text-md text-semibold text-gray-400">Services</li>
            </ul>
        </nav>
        <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-5 rounded-full flex items-center text-md text-semibold">
            Contacteer ons
            <svg className="w-[20px] h-[20px] ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button>
      </header>
    )
  }
}
