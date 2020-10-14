;(function() {
   var body = document.querySelector('body');

   var closestItemByClass = function(item, className) {
      var node = item;
      while(node) {
         if(node.classList.contains(className)) {
            return node;
         }
         node = node.parentElement;
      }
      return null;
   }

   var showPopup = function(target) {
      target.classList.add('popup-is-active');
   }

   var closePopup = function(target) {
      target.classList.remove('popup-is-active');
   }

   var toggleScroll = function() {
      body.classList.toggle('no-scroll')
   } 

   body.addEventListener('click', function(e) {
      var target = e.target;
      var popupClass  = target.getAttribute('data-popup');
      if (popupClass === null) {
         return;
      }
      e.preventDefault();
      var popup = document.querySelector('.' + popupClass);

      if(popup) {
         showPopup(popup);
         toggleScroll();
      }
   })
   body.addEventListener('click', function(e) {
      var target = e.target;
      if(target.classList.contains('popup__btn-close') || target.classList.contains('popup__body')) {
         
         var popup = closestItemByClass(target, 'popup');
         closePopup(popup);
         toggleScroll();         
      }
   })

   body.addEventListener('keydown', function(e) {
      if(e.keyCode !== 27) {
         return;
      }
      var popup = document.querySelector('.popup-is-active');

      if(popup) {
         closePopup(popup);
         toggleScroll();
      }
   })
}) ();