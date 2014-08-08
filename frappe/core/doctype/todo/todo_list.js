frappe.listview_settings['ToDo'] = {
	onload: function(me) {
		frappe.route_options = {
			"owner": user,
			"status": "Open"
		};
	},
	add_fields: ["reference_type", "reference_name"],
	set_title_left: function() {
		frappe.set_route();
	},
	prepare_data: function(data) {
		data["user_for_avatar"] = data.owner;
		data["Assigned To"] = data.owner===user ? null : (frappe.boot.user_info[data.owner] || {}).fullname;
	}
}
