module.exports = {
    '/api/v1/users': {
        default: {
            data: [
                {name: 'Name1'},
                {name: 'Name2'}
            ],
            headers: {
                XTagNext: '1234'
            }
        },
        blank: {
            data: []
        },
        increase: {
            data: [
                {name: 'Name1'},
                {name: 'Name2'},
                {name: 'Name3'},
                {name: 'Name4'}
            ]
        }
    },
    // json body test
    '/api/v1/login': {
    	POST: {
    		data: function(req) {
    			if (req.body.id == "myId") {
    				return {
    					code: 1,
    					message: 'success'
    				};
    			}
    			return {
    				code: 0,
    				message: 'fail'
    			}
    		}
    	}
    }
};