import * as m from 'mithril';

/*
This file provides Mithril Components for screens
HTML src is designed and converted to js Mithril code using http://arthurclemens.github.io/mithril-template-converter/index.html
*/

/* ********************* Loading Screen Src HTML ********************* */
/*
  <div id="loading-screen" class="mui--z2" style="background-color: #00b89c; height:85%; width:100%;">
    <div class="mui--text-headline mui--text-light mui--text-center" style="padding-top:30px;">
      <strong id="loading-text">Searching for book...</strong>
    </div>
    <div class="bookshelf_wrapper">
      <ul class="books_list">
        <li class="book_item first"></li>
        <li class="book_item second"></li>
        <li class="book_item third"></li>
        <li class="book_item fourth"></li>
        <li class="book_item fifth"></li>
        <li class="book_item sixth"></li>
      </ul>
      <div class="shelf"></div>
    </div>
  </div>
*/
export let loadingScreenText = "Searching for book..."
export function setLoadingScreenText(value: string) {
  loadingScreenText = value;
}
export let loadingScreen = {
  view: function () {
    console.log("in loadingScreenView");
    return m(".mui--z2[id='loading-screen']", { style: { "background-color": "#00b89c", "height": "85%", "width": "100%" } },
      [
        m(".mui--text-headline.mui--text-light.mui--text-center", { style: { "padding-top": "30px" } },
          m("strong[id='loading-text']",
            loadingScreenText
          )
        ),
        m(".bookshelf_wrapper",
          [
            m("ul.books_list",
              [
                m("li.book_item.first"),
                m("li.book_item.second"),
                m("li.book_item.third"),
                m("li.book_item.fourth"),
                m("li.book_item.fifth"),
                m("li.book_item.sixth")
              ]
            ),
            m(".shelf")
          ]
        )
      ]
    )
  }
};

/* ********************* Select Book Screen Src HTML ********************* */
/*
  <div id="choose-book-screen" class="mui--z2" style="background-color:#fafafa; padding:15px;">
    <div id="book-notice-box" class="mui--text-headline mui--text-center">
      <p>
        <strong style="color:#00b89c">Select Book</strong>
      </p>
    </div>
    <div id="query-string" class="mui-panel">fg</div>
    <div id="list-result-books">
      <table class="mui-table">
        <tbody>
          <tr>
            <td class="hover-highlight">
              <div style="display:inline-block;">
                <img class="book-image" src="https://images-na.ssl-images-amazon.com/images/I/51iDDR5cQ8L.jpg">
                <div class="book-details">The Witch-Hunt; or, The Triumph of Morality
                  <br> by F.G. Bailey</div>
              </div>
            </td>
            <td class="hover-highlight">
              <div style="display:inline-block;">
                <img class="book-image" src="https://images-na.ssl-images-amazon.com/images/I/51sEAEJoVIL.jpg">
                <div class="book-details">Dark Resurrection (A Colony Novel)
                  <br> F.G. Cottam</div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="hover-highlight">
              <div style="display:inline-block;">
                <img class="book-image" src="https://images-na.ssl-images-amazon.com/images/I/41D8TD5kH0L.jpg">
                <div class="book-details">Original Instruction Manual for Nikon FG
                  <br> by NikonCorp</div>
              </div>
            </td>
            <td class="hover-highlight">
              <div style="display:inline-block;">
                <img class="book-image" src="https://images-na.ssl-images-amazon.com/images/I/51tRM5d4uGL.jpg">
                <div class="book-details">Aldin's Wish (Enchanted Immortals Book 1)
                  <br> by F.G. Adams</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
*/
export let selectBookScreen = {
  view: function () {
    return m(".mui--z2[id='choose-book-screen']", { style: { "background-color": "#fafafa", "padding": "15px" } },
      [
        m(".mui--text-headline.mui--text-center[id='book-notice-box']",
          m("p",
            m("strong", { style: { "color": "#00b89c" } },
              "Select Book"
            )
          )
        ),
        m(".mui-panel[id='query-string']",
          "fg"
        ),
        m("[id='list-result-books']",
          m("table.mui-table",
            m("tbody",
              [
                m("tr",
                  [
                    m("td.hover-highlight",
                      m("div", { style: { "display": "inline-block" } },
                        [
                          m("img.book-image[src='https://images-na.ssl-images-amazon.com/images/I/51iDDR5cQ8L.jpg']"),
                          m(".book-details",
                            [
                              "The Witch-Hunt; or, The Triumph of Morality\
                  ",
                              m("br"),
                              " by F.G. Bailey"
                            ]
                          )
                        ]
                      )
                    ),
                    m("td.hover-highlight",
                      m("div", { style: { "display": "inline-block" } },
                        [
                          m("img.book-image[src='https://images-na.ssl-images-amazon.com/images/I/51sEAEJoVIL.jpg']"),
                          m(".book-details",
                            [
                              "Dark Resurrection (A Colony Novel)\
                  ",
                              m("br"),
                              " F.G. Cottam"
                            ]
                          )
                        ]
                      )
                    )
                  ]
                ),
                m("tr",
                  [
                    m("td.hover-highlight",
                      m("div", { style: { "display": "inline-block" } },
                        [
                          m("img.book-image[src='https://images-na.ssl-images-amazon.com/images/I/41D8TD5kH0L.jpg']"),
                          m(".book-details",
                            [
                              "Original Instruction Manual for Nikon FG\
                  ",
                              m("br"),
                              " by NikonCorp"
                            ]
                          )
                        ]
                      )
                    ),
                    m("td.hover-highlight",
                      m("div", { style: { "display": "inline-block" } },
                        [
                          m("img.book-image[src='https://images-na.ssl-images-amazon.com/images/I/51tRM5d4uGL.jpg']"),
                          m(".book-details",
                            [
                              "Aldin's Wish (Enchanted Immortals Book 1)\
                  ",
                              m("br"),
                              " by F.G. Adams"
                            ]
                          )
                        ]
                      )
                    )
                  ]
                )
              ]
            )
          )
        )
      ]
    )
  }
};
/* ********************* Select List Screen Src HTML ********************* */
/*
  <div id="choose-list-screen" class="mui--z2 animated bounceInDown" style="background-color:#fafafa; padding:15px;">
    <div id="book-notice-box" class="mui--text-headline mui--text-center">
      <p>
        <strong style="color:#00b89c">Select Bookshelf</strong>
      </p>
    </div>
    <div id="list-result-books">
      <div style="display:inline-block;">
        <img class="selected-book-image" src="https://images-na.ssl-images-amazon.com/images/I/51iDDR5cQ8L.jpg">
        <div class="selected-book-details">
          <div style="padding:5px;">The Witch-Hunt; or, The Triumph of Morality</div>
          <div style="padding:5px;">F.G. Bailey</div>
          <div class="mui-select" style="margin:5px;">
            <select>
              <option>Currently Reading</option>
              <option>Completed</option>
              <option>Books I Have Read</option>
              <option>Books I Want to Read</option>
            </select>
            <label>Add Book to:</label>
          </div>
          <div style="padding:5px;"></div>
          <button class="mui-btn mui-btn--raised" style="width:100%">Save</button>
        </div>
      </div>
    </div>
  </div>
*/
export let selectListScreen = {
  view: function () {
    return m(".mui--z2.animated.bounceInDown[id='choose-list-screen']", { style: { "background-color": "#fafafa", "padding": "15px" } },
      [
        m(".mui--text-headline.mui--text-center[id='book-notice-box']",
          m("p",
            m("strong", { style: { "color": "#00b89c" } },
              "Select Bookshelf"
            )
          )
        ),
        m("[id='list-result-books']",
          m("div", { style: { "display": "inline-block" } },
            [
              m("img.selected-book-image[src='https://images-na.ssl-images-amazon.com/images/I/51iDDR5cQ8L.jpg']"),
              m(".selected-book-details",
                [
                  m("div", { style: { "padding": "5px" } },
                    "The Witch-Hunt; or, The Triumph of Morality"
                  ),
                  m("div", { style: { "padding": "5px" } },
                    "F.G. Bailey"
                  ),
                  m(".mui-select", { style: { "margin": "5px" } },
                    [
                      m("select",
                        [
                          m("option",
                            "Currently Reading"
                          ),
                          m("option",
                            "Completed"
                          ),
                          m("option",
                            "Books I Have Read"
                          ),
                          m("option",
                            "Books I Want to Read"
                          )
                        ]
                      ),
                      m("label",
                        "Add Book to:"
                      )
                    ]
                  ),
                  m("div", { style: { "padding": "5px" } }),
                  m("button.mui-btn.mui-btn--raised", { style: { "width": "100%" } },
                    "Save"
                  )
                ]
              )
            ]
          )
        )
      ]
    )
  }
};
