import { checkZaloCameraPermission } from "zmp-sdk/apis";
function toan_zaloCameraPermission() {
    
    checkZaloCameraPermission({
        success: function ({ userAllow }) {
          if (userAllow) {
          }
        },
        fail: function (err) {
          console.log(err);
        }
    });
      
}