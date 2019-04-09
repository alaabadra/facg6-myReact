const getData = (url) => {
    return (
        fetch(url).then(result=>isResponse(result))
    )
}
const isResponse = (response) => {
    if(response.status !== 200){
        return {
            error:`error in response ${response.status}`
        }
    }
    return response.json();
}
export default getData;