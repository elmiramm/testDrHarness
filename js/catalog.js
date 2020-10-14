;(function(){
   var catalogSection = document.querySelector('.section-catalog');

   if(catalogSection === null) {
      return;
   }
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

   var removeChildren = function(item){
      while(item.firstChild) {
         item.removeChild(item.firstChild);
      }
   }
   var updateChildren = function(item, children) {
      removeChildren(item);
      for(var i = 0; i < children.length; i += 1) {
         item.appendChild(children[i]);
      }
   }

   var catalog = catalogSection.querySelector('.catalog');
   var catalogNav = catalogSection.querySelector('.catalog-nav');
   var catalogItems = catalogSection.querySelectorAll('.catalog__item');

   window.addEventListener('load', function() {
      var btnActiveDefault = catalogNav.querySelector('.catalog-nav__btn.is-active');
      var filterValueDefault = btnActiveDefault.getAttribute('data-filter');
      
      var filteredItemsDefault = [];

      for(var i = 0; i < catalogItems.length; i += 1) {
         var current = catalogItems[i];
         if(current.getAttribute('data-category') === filterValueDefault) {
            filteredItemsDefault.push(current);
         }

      }
      updateChildren(catalog, filteredItemsDefault);
   })

   catalogNav.addEventListener('click', function(e) {
      var target = e.target;

      var item = closestItemByClass(target, 'catalog-nav__btn');

      if(item === null || item.classList.contains('is-active')){
         return;
      }

      e.preventDefault();
      var filterValue = item.getAttribute('data-filter');
      var previousBtnActive = catalogNav.querySelector('.catalog-nav__btn.is-active');

      
      previousBtnActive.classList.remove('is-active');
      item.classList.add('is-active');

      var filteredItems = [];

      for(var i = 0; i < catalogItems.length; i += 1) {
         var current = catalogItems[i];
         if(current.getAttribute('data-category') === filterValue) {
            filteredItems.push(current);
         }
      }
      updateChildren(catalog, filteredItems);
   })
})();