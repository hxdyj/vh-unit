function setVh() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}
export default function initVh() {
    setVh()
    window.addEventListener('resize', () => {
        setVh()
    })
}
