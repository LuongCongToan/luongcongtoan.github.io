import api from "zmp-sdk";
function toan_zaloCameraPermission() {
    
    api.getPhoneNumber({
        success: async function(data) {
          // xử lý khi gọi api thành công
          let { token, number } = data;
          // xử lý cho trường hợp sử dụng phiên bản Zalo mới
            window.alert("thanh cong");
        },
        fail: function(error) {
          // xử lý khi gọi api thất bại
          window.alert("error ");
        },
      });
      
}