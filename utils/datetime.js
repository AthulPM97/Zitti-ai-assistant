function getCurrentTime() {
    return new Date();
  }
  
  function getCurrentDate() {
    return new Date().toLocaleDateString();
  }
  
  module.exports = { getCurrentTime, getCurrentDate };  