// Assuming this is in a module or script file
import zmpSdk from "zmp-sdk/apis";

// Define a global function
function toan_zaloCameraPermission() {
    console.log("=== toan_zaloCameraPermission=== ");
    zmpSdk.requestCameraPermission({
        success: function(response) {
          var userAllow = response.userAllow;
          var message = response.message;
  
          if (userAllow) {
            window.alert("requestCameraPermission!!!!");
            // được phép sử dụng camera
          }
        },
        fail: function(err) {
          // xử lý khi gọi api thất bại
          console.log(err);
          window.alert("requestCameraPermission!!!! error");
        }
      });
}