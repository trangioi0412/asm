export class VCategory {
    showCategory = (category) => {
        let divCateAll = document.querySelector('.category_detail');
        category.forEach(cate => {
            let divCate = document.createElement('div');
            divCate.classList.add('category_detail_element');
            divCate.innerHTML = `
                    <a href="">
                        <img src="./public/img/category/${cate.Img}" alt="" class="category_detail_element_img">
                    </a>
                    <div class="category_detail_element-btn">
                        <button class="category_detail_element-btn_element">${cate.Name}</button>
                    </div>
            `;
            divCateAll?.appendChild(divCate);
        });
    };
    cateShowForm = (data) => {
        let select = document.getElementById('form_select');
        data.forEach((element) => {
            let option = document.createElement('option');
            option.value = element.Id.toString();
            option.innerText = element.name;
            select?.appendChild(option);
        });
    };
    showCateAdmin = (category) => {
        category.forEach(cate => {
            let tbodyInfo = document.querySelector('.category_infor');
            let trInfo = document.createElement('tr');
            trInfo.innerHTML = `
                <td>${cate.name}</td>
                <td><img src=''/></td>
                <td>
                    <button class="updatePro" data-id="${cate.id}">Sửa</button>
                    <button class="deleteCate" data-id="${cate.id}">xóa</button>
                </td>
            `;
            tbodyInfo?.appendChild(trInfo);
        });
    };
}
