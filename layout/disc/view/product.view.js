export class VProduct {
    showNewProduct = (products) => {
        let divProE = document.querySelector('.product_detail');
        products.forEach(pro => {
            console.log(pro.name);
            let divP = document.createElement('div');
            divP.classList.add('product_detail_element');
            divP.innerHTML = `
                <img src="./public/img/product/${this.getImg(pro.img)[0]}" alt="" class="product_detail_img">
                <div>
                    <p class="product_detail_name">${pro.Name}</p>
                    <p class="product_detail_price">${pro.price.toLocaleString('vi-VN')}</p>
                </div>
                <div class="product_detail_element_action">
                    <div class="product_detail_element_action_a">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <a href="">Thêm Vào Giỏ Hàng</a>
                    </div>
                    <div class="product_detail_element_action_a">
                        <i class="fa-solid fa-eye"></i>
                        <a href="">Xem Chi Tiết</a>
                    </div>
                </div>
            `;
            divProE?.appendChild(divP);
        });
    };
    showAdminPro = (product) => {
        let tbodyInfo = document.querySelector('.products_infor');
        product.forEach(e => {
            let trInfo = document.createElement('tr');
            let checkNew = '';
            if (e.news === 1) {
                checkNew = 'mới';
            }
            else {
                checkNew = 'không';
            }
            trInfo.innerHTML = `
            <td>${e.name}</td>
            <td>${e.price.toLocaleString('en-ES')}</td>
            <td>${e.star}</td>
            <td>${e.comment}</td>
            <td>${e.like}</td>
            <td>${e.Category.categoryName}</td>
            <td>${checkNew}</td>
            <td>${e.sale}%</td>
            <td>${e.brand}</td>
            <td>
                <button class="updatePro" data-id="${e.id}">Sửa</button>
                <button class="deletePro" data-id="${e.id}">xóa</button>
            </td>
        `;
            tbodyInfo?.appendChild(trInfo);
        });
    };
    checkSalePro = (sale, price) => {
        if (sale != 0) {
            let priceNew = price - sale / 100 * price;
            return `<s class="product_detail_price_old">${[price]}</s> ${priceNew}`;
        }
        else {
            return price;
        }
    };
    getImg = (img) => {
        return img.split(',');
    };
}
