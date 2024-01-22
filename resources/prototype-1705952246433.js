(function(window, undefined) {
  var dictionary = {
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);function initData() {
  jimData.datamasters["Date"] = [
    {
      "id": 1,
      "datamaster": "Date",
      "userdata": {
        "0809927d-70cd-4741-a4ea-496ffe7b4eac": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "Date",
      "userdata": {
        "0809927d-70cd-4741-a4ea-496ffe7b4eac": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "Date",
      "userdata": {
        "0809927d-70cd-4741-a4ea-496ffe7b4eac": "sample text"
      }
    }
  ];

  jimData.isInitialized = true;
}(function(window, undefined) {
  var dictionary = {
    "da3b5504-9c1c-4d1b-9ea0-41410361c16a": "About Page",
    "22a610b3-2a3b-4aa3-9701-ed2adfbe84e0": "Contact",
    "7790122a-39da-45a3-b81d-0e11de59401d": "Accomodations",
    "01514f4f-9d35-4b71-9bbd-ef5079fc66db": "To Do",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);	window.widgets = {
		descriptionMap : widgetDescriptionMap = {},
		rootWidgetMap : widgetRootMap = {}
	};

	widgets.descriptionMap[["s-Ellipse_8", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ""; 

			widgets.rootWidgetMap[["s-Ellipse_8", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ["Play", "s-Group_12"]; 

	widgets.descriptionMap[["s-Path_9", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ""; 

			widgets.rootWidgetMap[["s-Path_9", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ["Play", "s-Group_12"]; 

	widgets.descriptionMap[["s-Paragraph_8", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_8", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ["H2", "s-Paragraph_8"]; 

	widgets.descriptionMap[["s-Paragraph_7", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_7", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ["H1", "s-Paragraph_7"]; 

	widgets.descriptionMap[["s-Input_15", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ""; 

			widgets.rootWidgetMap[["s-Input_15", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ["Search", "s-Group_4"]; 

	widgets.descriptionMap[["s-Path_1", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ""; 

			widgets.rootWidgetMap[["s-Path_1", "da3b5504-9c1c-4d1b-9ea0-41410361c16a"]] = ["Search", "s-Group_4"]; 

	widgets.descriptionMap[["s-Paragraph_2", "22a610b3-2a3b-4aa3-9701-ed2adfbe84e0"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_2", "22a610b3-2a3b-4aa3-9701-ed2adfbe84e0"]] = ["H1", "s-Paragraph_2"]; 

	widgets.descriptionMap[["s-Input_15", "22a610b3-2a3b-4aa3-9701-ed2adfbe84e0"]] = ""; 

			widgets.rootWidgetMap[["s-Input_15", "22a610b3-2a3b-4aa3-9701-ed2adfbe84e0"]] = ["Search", "s-Group_2"]; 

	widgets.descriptionMap[["s-Path_1", "22a610b3-2a3b-4aa3-9701-ed2adfbe84e0"]] = ""; 

			widgets.rootWidgetMap[["s-Path_1", "22a610b3-2a3b-4aa3-9701-ed2adfbe84e0"]] = ["Search", "s-Group_2"]; 

	widgets.descriptionMap[["s-Paragraph_7", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_7", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ["H2", "s-Paragraph_7"]; 

	widgets.descriptionMap[["s-Image", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ""; 

			widgets.rootWidgetMap[["s-Image", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ["Image", "s-Image"]; 

	widgets.descriptionMap[["s-Image_2", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_2", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ["Image", "s-Image_2"]; 

	widgets.descriptionMap[["s-Image_3", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_3", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ["Image", "s-Image_3"]; 

	widgets.descriptionMap[["s-Paragraph_8", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_8", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ["H3", "s-Paragraph_8"]; 

	widgets.descriptionMap[["s-Paragraph_9", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_9", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ["H3", "s-Paragraph_9"]; 

	widgets.descriptionMap[["s-Paragraph_10", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_10", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ["H3", "s-Paragraph_10"]; 

	widgets.descriptionMap[["s-Paragraph_6", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_6", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ["H1", "s-Paragraph_6"]; 

	widgets.descriptionMap[["s-Input_15", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ""; 

			widgets.rootWidgetMap[["s-Input_15", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ["Search", "s-Group_3"]; 

	widgets.descriptionMap[["s-Path_1", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ""; 

			widgets.rootWidgetMap[["s-Path_1", "7790122a-39da-45a3-b81d-0e11de59401d"]] = ["Search", "s-Group_3"]; 

	widgets.descriptionMap[["s-Paragraph_6", "01514f4f-9d35-4b71-9bbd-ef5079fc66db"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_6", "01514f4f-9d35-4b71-9bbd-ef5079fc66db"]] = ["H1", "s-Paragraph_6"]; 

	widgets.descriptionMap[["s-Image", "01514f4f-9d35-4b71-9bbd-ef5079fc66db"]] = ""; 

			widgets.rootWidgetMap[["s-Image", "01514f4f-9d35-4b71-9bbd-ef5079fc66db"]] = ["Image", "s-Image"]; 

	widgets.descriptionMap[["s-Image_1", "01514f4f-9d35-4b71-9bbd-ef5079fc66db"]] = ""; 

			widgets.rootWidgetMap[["s-Image_1", "01514f4f-9d35-4b71-9bbd-ef5079fc66db"]] = ["Image", "s-Image_1"]; 

	widgets.descriptionMap[["s-Image_2", "01514f4f-9d35-4b71-9bbd-ef5079fc66db"]] = ""; 

			widgets.rootWidgetMap[["s-Image_2", "01514f4f-9d35-4b71-9bbd-ef5079fc66db"]] = ["Image", "s-Image_2"]; 

	widgets.descriptionMap[["s-Paragraph_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["H1", "s-Paragraph_2"]; 

	widgets.descriptionMap[["s-Paragraph_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["H2", "s-Paragraph_3"]; 

	widgets.descriptionMap[["s-Paragraph_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["H3", "s-Paragraph_4"]; 

	widgets.descriptionMap[["s-Input_15", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Input_15", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Search", "s-Group_5"]; 

	widgets.descriptionMap[["s-Path_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Path_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Search", "s-Group_5"]; 

	jQuery("#simulation")
  .on("click", ".s-da3b5504-9c1c-4d1b-9ea0-41410361c16a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/da3b5504-9c1c-4d1b-9ea0-41410361c16a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7790122a-39da-45a3-b81d-0e11de59401d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/01514f4f-9d35-4b71-9bbd-ef5079fc66db"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/22a610b3-2a3b-4aa3-9701-ed2adfbe84e0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-da3b5504-9c1c-4d1b-9ea0-41410361c16a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-da3b5504-9c1c-4d1b-9ea0-41410361c16a #s-Path_9" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-da3b5504-9c1c-4d1b-9ea0-41410361c16a #shapewrapper-s-Ellipse_8" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-da3b5504-9c1c-4d1b-9ea0-41410361c16a #s-Path_9" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-da3b5504-9c1c-4d1b-9ea0-41410361c16a #shapewrapper-s-Ellipse_8" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-da3b5504-9c1c-4d1b-9ea0-41410361c16a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_9")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-22a610b3-2a3b-4aa3-9701-ed2adfbe84e0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/da3b5504-9c1c-4d1b-9ea0-41410361c16a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7790122a-39da-45a3-b81d-0e11de59401d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/01514f4f-9d35-4b71-9bbd-ef5079fc66db"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/22a610b3-2a3b-4aa3-9701-ed2adfbe84e0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-7790122a-39da-45a3-b81d-0e11de59401d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/da3b5504-9c1c-4d1b-9ea0-41410361c16a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7790122a-39da-45a3-b81d-0e11de59401d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/01514f4f-9d35-4b71-9bbd-ef5079fc66db"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/22a610b3-2a3b-4aa3-9701-ed2adfbe84e0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-01514f4f-9d35-4b71-9bbd-ef5079fc66db .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/da3b5504-9c1c-4d1b-9ea0-41410361c16a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7790122a-39da-45a3-b81d-0e11de59401d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/01514f4f-9d35-4b71-9bbd-ef5079fc66db"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/22a610b3-2a3b-4aa3-9701-ed2adfbe84e0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/da3b5504-9c1c-4d1b-9ea0-41410361c16a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7790122a-39da-45a3-b81d-0e11de59401d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/01514f4f-9d35-4b71-9bbd-ef5079fc66db"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/22a610b3-2a3b-4aa3-9701-ed2adfbe84e0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });