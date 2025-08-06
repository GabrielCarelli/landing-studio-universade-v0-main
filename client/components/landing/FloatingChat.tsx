const FloatingChat = () =>{
    return(
        <button className="fixed bottom-8 right-8 sm:bottom-6 sm:right-6 flex w-16 h-16 sm:w-[183px] sm:h-16 px-4 sm:px-[70px] py-4 justify-center items-center gap-2.5 rounded-full bg-studio-yellow shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] z-50 hover:scale-105 transition-all">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22Z"
                    fill="#102E4E"
                  />
                </svg>
                <span className="hidden sm:block text-studio-blue font-fanun text-2xl font-bold">
                  Chat
                </span>
              </button>
    )
}

export default FloatingChat;