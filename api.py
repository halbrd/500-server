import falcon
class UserResource(object):
	def on_get(self, req, res):
		res.status = falcon.HTTP_200
		res.body = "Successful User GET"

	def on_post(self, req, res):
		res.body = req

api = falcon.API()

userResource = UserResource()

api.add_route('/user', userResource)
