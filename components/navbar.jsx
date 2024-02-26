import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <section className="xl:mx-24 bg-white">
            <div className="navbar bg-base-100 py-5">
                <div className="flex-1">
                    <a className="btn btn-ghost font-black text-nigger text-2xl">CalDev<p className="font-black text-biru text-2xl">●</p></a>
                    
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-nigger text-[15px]">
                        <li><a className="hidden md:block">Study</a></li>
                        <li><a className="hidden md:block">My Works</a></li>
                        <li><a className="hidden md:block">Contacts</a></li>
                        <li className="z-50">
                            <details>
                                <summary>
                                    Parent
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Study</a></li>
                                    <li><a>My Works</a></li>
                                    <li><a>Contacts</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Navbar;