/* *****************************************************************************
 * Virtual objects for jsdoc documentation
 */

// Allow unused variables for demonstration
/*jshint unused:false */


/**
 * Context object passed too hook functions.
 * @name HookContext
 *
 * @property {Fancytree} tree
 * @property {any} widget
 * @property {FancytreeOptions} options
 * @property {Event} orgEvent
 * @property {FancytreeNode | null} node
 * @property {String | undefined} targetType (only for click and dblclick events) 'title' | 'prefix' | 'expander' | 'checkbox' | 'icon'
 *
 */
var HookContext = {};


/**
 * Data object passed to FancytreeNode() constructor.
 * @name NodeData
 *
 * @property {String} title node text (may contain HTML tags)
 * @property {String} key unique key for this node (auto-generated if omitted)
 * @property {Boolean} expanded
 * @property {Boolean} active (initialization only, but will not be stored  with the node).
 * @property {Boolean} focus (initialization only, but will not be stored  with the node).
 * @property {Boolean} folder
 * @property {Boolean} hideCheckbox
 * @property {Boolean} lazy
 * @property {Boolean} selected
 * @property {Boolean} unselectable
 * @property {NodeData[]} children optional array of child nodes
 * @property {String} tooltip
 * @property {String} extraClasses class names added to the node markup (separate with space)
 * @property {object} data all properties from will be copied to `node.data`
 * @property {any} OTHER attributes other than listed above will be copied to `node.data`
 *
 */
var NodeData = {};


/**
 * Data object similar to {@link NodeData}, but with additional options.
 * May be passed to {@link FancytreeNode#applyPatch}
 * (Every property that is omitted (or set to undefined) will be ignored)
 * @name NodePatch
 *
 * @property {any} any (see NodeData)
 * @property {NodeData} appendChildren (not yet implemented)
 * @property {NodeData} replaceChildren (not yet implemented)
 * @property {NodeData} insertChildren (not yet implemented)
 */
var NodePatch = {};


/**
 * List of [key, {@link NodePatch}]  tuples.
 * May be passed to {@link Fancytree#applyPatch}.
 * @name TreePatch
 *
 */
var TreePatch = {};

/**
 * @name FancytreeOptions
 *
 * @description
 * Fancytree options (see also example)
 * line 2
 *
 * @example $("#tree").fancytree({source: "/myService"});
 *
 * @property {Boolean} activeVisible Make sure that the active node is always visible, i.e. it's parents are expanded (default: true).
 * @property {object} ajax Default options for ajax requests
 * @property {Boolean} aria
 * @property {Boolean} autoActivate (default: true)
 * @property {Boolean} autoCollapse Automatically collapse all siblings, when a node is expanded (default: false).
 * @property {Boolean} autoScroll (default: false).
 * @property {Boolean} checkbox Display checkboxes to allow selection  (default: false)
 * @property {Integer} clickFolderMode Defines what happens, when the user click a folder node.<br>1:activate, 2:expand, 3:activate and expand, 4:activate/dblclick expands  (default: 4)
 * @property {Integer} debugLevel  0..2 (null: use global setting $.ui.fancytree.debugInfo)
 * @property {Boolean} enableAspx (default: true).
 * @property {String[]} extensions List of active extensions (default: [])
 * @property {object} fx Animation options, null:off (default: { height: "toggle", duration: 200 })
 * @property {Boolean} generateIds (default: true).
 * @property {Boolean} icons Display node icons  (default: true)
 * @property {String} idPrefix (default: "ft_")
 * @property {Boolean} keyboard (default: true).
 * @property {String} keyPathSeparator (default: "/")
 * @property {String} imagePath Path to a folder containing icons (default: null, using 'skin/' subdirectory).
 * @property {Boolean} keyboard Support keyboard navigation (default: true).
 * @property {Integer} minExpandLevel 1: root node is not collapsible (default: 1)
 * @property {Integer} selectMode 1:single, 2:multi, 3:multi-hier (default: 2)
 * @property {any} source Used to Initialize the tree.
 * @property {object} strings Translation table
 * @property {Boolean} tabbable Add tabindex='0' to container, so tree can be reached using TAB
 *
 */
var FancytreeOptions = {};

/** Fancytree events
 * @name FancytreeEvents
 *
 * @description
 * Events are called like this:
 *    CALLBACK_NAME(event, data)
 * where `event` is a {@link http://api.jquery.com/category/events/event-object/|jQuery Event} object and `data` is of type {@link HookContext}
 *
 * @see <a href="http://api.jquery.com/category/events/event-object/">jQuery Event</a>
 * @see HookContext
 *
 * @example $("#tree").fancytree({
 *     activate: function(event, data){
 *         var node = data.node;
 *     }
 * });
 *
 * @property {function} activate `data.node` was deactivated
 * @property {function} beforeActivate Return `false` to prevent default processing
 * @property {function} beforeExpand Return `false` to prevent default processing
 * @property {function} beforeSelect Return `false` to prevent default processing
 * @property {function} blur `data.node` lost keyboard focus
 * @property {function} blurTree `data.tree` lost keyboard focus
 * @property {function} click `data.node` was clicked. `data.targetType` contains the region ("title", "expander", ...). Return `false` to prevent default processing, i.e. activating, etc.
 * @property {function} collapse `data.node` was collapsed
 * @property {function} create
 * @property {function} createNode
 * @property {function} dblclick `data.node` was clicked.
 * @property {function} deactivate `data.node` was deactivated
 * @property {function} expand `data.node` was expanded
 * @property {function} focus `data.node` received keyboard focus
 * @property {function} focusTree `data.tree` received keyboard focus
 * @property {function} init
 * @property {function} keydown `data.node` received key. `event.which` contains the key. Return `false` to prevent default processing, i.e. navigation.
 * @property {function} keypress
 * @property {function} lazyload `data.node` is lazy a lazy node that is expanded for the first time.
 * @property {function} loadChildren
 * @property {function} postProcess ajax request returned
 * @property {function} renderNode
 * @property {function} select `data.node` was selected
 *
 */
var FancytreeEvents = {};
