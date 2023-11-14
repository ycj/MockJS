
//省份
const lpn_province = ['黑', '吉', '辽', '蒙', '冀', '新', '甘', '青', '陕', '宁', 
              '豫', '鲁', '晋', '皖', '鄂', '湘', '苏', '赣', '闽', '浙', 
              '粤', '桂', '琼', '川', '贵', '云', '藏', '渝', '京', '津', 
              '沪'];  //不包括'港', '澳', '台'
//城市
const lpn_city = {
    '黑': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'R'],
    '吉': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'],
    '辽': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'V'],
    '蒙': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
};

const lpn_city_default = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N'];

//号码, 不包括I，O两个号段
const lpn_number = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K',
                    'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
                    'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', 
                    '6', '7', '8', '9']; 

module.exports = {
    //随机生成中国车辆号牌
    clpn: function(){
        let province = this.pick(lpn_province);
        let city_code = province in lpn_city? this.pick(lpn_city[province]) : this.pick(lpn_city_default);
        let number = '';
        for (let i=0;i<5;i++){
            number += this.pick(lpn_number);
        }
        return `${province}${city_code}${number}`;
    }
}
