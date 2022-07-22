
# Menu

---

Menus display a list of choices on temporary surfaces. A Menu displays a list of choices on a temporary surface. It appears when the user interacts with a button, or other control.

## Simple Menu

Simple menus open over the anchor element by default (this option can be changed via props). When close to a screen edge, simple menus vertically realign to make sure that all menu items are completely visible.

Choosing an option should immediately ideally commit the option and close the menu.

> *Disambiguation*: In contrast to simple menus, simple dialogs can present additional detail related to the options available for a list item or provide navigational or orthogonal actions related to the primary task. Although they can display the same content, simple menus are preferred over simple dialogs because simple menus are less disruptive to the user’s current context.



Missing parser for block type Code

 

## Selected menus

If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item. 

The currently selected menu item is set using the selected property (from `ListItem`). To use a selected menu item without impacting the initial focus or the vertical positioning of the menu, set the variant property to the menu.



Missing parser for block type Code

 

## Max height menus

If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.



Missing parser for block type Code

 