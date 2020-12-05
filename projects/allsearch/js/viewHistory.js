function viewElementTitle(elementTitle, elementTitleLink, parent) {
  let m_elementTitle = document.createElement('a');
  m_elementTitle.className = 'm-elementTitle';
  m_elementTitle.innerHTML = elementTitle;
  m_elementTitle.href = elementTitleLink;
  m_elementTitle.target = "_blank";
  parent.appendChild(m_elementTitle);
}

function viewElementSubtitle(elementSubitle, parent) {
  let m_elementSubtitle = document.createElement('div');
  m_elementSubtitle.className = 'm-elementSubtitle';
  m_elementSubtitle.innerHTML = elementSubitle;
  parent.appendChild(m_elementSubtitle);
}

function viewElement(elementTitle, elementTitleLink, elementSubtitle, parent, id = '') {
  let m_element = document.createElement('div');
  m_element.className = 'm-element';
  m_element.id = id;

  viewElementTitle(elementTitle, elementTitleLink, m_element);
  viewElementSubtitle(elementSubtitle, m_element);

  parent.appendChild(m_element);
}

function viewWidgetTitle(widgetTitle, parent) {
  let m_widgetTitle = document.createElement('div');
  m_widgetTitle.className = 'm-widgetTitle';
  m_widgetTitle.innerHTML = widgetTitle;
  parent.appendChild(m_widgetTitle);
}

function viewCategoryTitle(categoryTitle, parent) {
  let m_categoryTitle = document.createElement('div');
  m_categoryTitle.className = 'm-categoryTitle';
  m_categoryTitle.innerHTML = categoryTitle;
  parent.appendChild(m_categoryTitle);
}



//-----------------------------------------------------------------------
function viewHistory() {
  m_module = document.getElementById('module');
  var history = JSON.parse(localStorage.getItem("history")).reverse();
  var date = "";
  var lenght = parseInt(localStorage.getItem("searchCounter"));

  for(c=0; c<lenght; c++) {
    //Wyświetlanie kategorii
    if(history[c].time.date != date) {
      var search = "";
      var preSearch = "";
      date = history[c].time.date;

      let m_category = document.createElement('div');
      m_category.className = 'm-category';
      viewCategoryTitle(date, m_category);

      for(w=0; w<lenght; w++) {
        //Wyświetlanie widgetu
        if(history[w].search != search && history[w].time.date == date && preSearch.indexOf(history[w].search) == -1) {
          search = history[w].search;
          preSearch = preSearch + " " + search;

          let m_widget = document.createElement('div');
          m_widget.className = 'm-widget';
          viewWidgetTitle(search, m_widget);

          //Wyświetlanie elementów
          var first = 0;
          for(e=0; e<lenght; e++) {
            //Wyświetlanie elementu
            if(history[e].search == search && history[e].time.date == date) {
              if(first == 0) {
                viewElement(history[e].text, history[e].link, "This device" + " | " + history[e].time.hour, m_widget, 'firstElement');
                m_category.appendChild(m_widget);
                first++;
              }
              else {
                viewElement(history[e].text, history[e].link, "This device" + " | " + history[e].time.hour, m_widget, '');
                m_category.appendChild(m_widget);
              }
            }
          }
        }
      }
      m_module.appendChild(m_category);
    }
  }
}
