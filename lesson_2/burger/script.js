window.onload = () => {
    document.getElementById('form').addEventListener('change', (e) => {
        counting()
    })
    const counting = () => {
    let price = 0, cal = 0
        document.querySelectorAll('input:checked').forEach((pos) => {
            price += +pos.getAttribute('data-price')
            cal += +pos.getAttribute('data-cal')
        })
        document.getElementById('price').innerHTML = price
        document.getElementById('cal').innerHTML = cal
    }
    counting()
    
    
}