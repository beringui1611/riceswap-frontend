export function changeChain(chain: string) {
    window.location.reload();
    localStorage.setItem("chain", chain);
}