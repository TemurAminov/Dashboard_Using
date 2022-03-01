
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
    const themeToggler = document.querySelector(".theme-toggler");


    // show sidebar
    menuBtn.addEventListener('click', () =>{
        sideMenu.style.display = 'block';
    })
    // close sidebar
    closeBtn.addEventListener('click', () =>{
        sideMenu.style.display = 'none';
    })
    // change theme
    themeToggler.addEventListener('click', ()=>{
        document.body.classList.toggle('dark-theme-variables');

        themeToggler.querySelector(`span:nth-child(1)`).classList.toggle('active')
        themeToggler.querySelector(`span:nth-child(2)`).classList.toggle('active')
    })

    const Orders =
        [{
        productName: 'Foldable Mini Drone',
        productNumber: '85631',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
        {
            productName: 'Larvender kf102 Drone',
            productNumber: '42913',
            paymentStatus: 'Refunded',
            shipping: 'Declined'
        },
        {
            productName: 'Trust tok32 Drone',
            productNumber: '82421',
            paymentStatus: 'Due',
            shipping: 'Pending'
        },
        {
            productName: 'Lipton  Tea',
            productNumber: '12987',
            paymentStatus: 'Due',
            shipping: 'Pending'
        },
        {
            productName: 'Mayskiy leto',
            productNumber: '34982',
            paymentStatus: 'Paid',
            shipping: 'Delivered'
        },
        {
            productName: 'Foldable Mini Drone',
            productNumber: '85631',
            paymentStatus: 'Due',
            shipping: 'Pending'
        },
        {
            productName: 'Larvender kf102 Drone',
            productNumber: '42913',
            paymentStatus: 'Refunded',
            shipping: 'Declined'
        },
        {
            productName: 'GPS 32k',
            productNumber: '42351',
            paymentStatus: 'Due',
            shipping: 'Pending'
        },
        {
            productName: 'Camera Ultra',
            productNumber: '12932',
            paymentStatus: 'Due',
            shipping: 'Pending'
        },
        {
            productName: 'Rico poco ',
            productNumber: '12932',
            paymentStatus: 'Paid',
            shipping: 'Delivered'
        }];

    Orders.forEach(order => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="
                ${order.shipping === 'Declined'
            ? 'danger' : order.shipping === 'pending'
                ? 'warning' : 'primary'}">
                ${order.shipping}</td>
                <td class="primary">Details</td>
                `;
        document.querySelector('table tbody').appendChild(tr);
    })
