---
title: User Filters
---

User filters allow you to create and manage custom filters to display specific processes in the main table. You can create filters based on various criteria such as process name, PID, user, and more.

### Results Matching
Depending on the selected view type, user filters match processes differently:

- **Flat View**: Matches processes directly based on the filter criteria.
- **Hierarchy View**: Matches processes and displays their parent processes, dimming those that do not match the filter.
- **Hierarchy, expand children dimmed**: Matches processes and displays all their child processes (recursively), dimming those that do not match the filter.
- **Hierarchy, expand children fully**: Matches processes and displays all their child processes (recursively).

### Creating a User Filter
To create a new user filter, follow these steps:

1. Go to Settings > Filters.
2. Click on the "Add..." button.
3. Enter a name for the filter.
4. Define the filter in JS editor (see [JavaScript filters](/reference/js_filters/) for more information).
   Built-in expression checker notifies you of any syntax errors in the filter code.
5. Click "Save" to create the filter.

The new filter will appear in the user filters section.

### Editing a User Filter
To edit an existing user filter, follow these steps:
1. Go to Settings > Filters.
2. Select the filter you want to edit from the list.
3. Modify the filter name or JS code in the editor.
4. Click "Save" to apply the changes.

If the edited filter is currently selected, the changes will take effect the next time the filter is selected due to performance reasons.

### Deleting a User Filter
To delete an existing user filter, follow these steps:
1. Go to Settings > Filters.
2. Select the filter you want to delete from the list.
3. Click on the "Delete" button.

The default `All` filter and the currently selected filter cannot be deleted.