#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2


from datetime import date,datetime
from google.appengine.ext import db
from google.appengine.api import users,mail



class CompanyHandler(webapp2.RequestHandler):
    def get_email2(self):
        return "arman.fatahi@gmail.com"
    def post(self):
        self.response.headers.add_header("Access-Control-Allow-Origin", "*")
        self.response.headers['Content-Type'] = "text/plain"
        if self.request.get('body'):
            #uni = self.request.get('uni')
            #prog = self.request.get('prog')
            
            message = mail.EmailMessage(sender="AIESEC in Malaysia <aiesecmalaysia@gmail.com>", # I am the best
                                        subject="Company Request " + datetime.now().strftime("%Y-%m-%d %H:%M"))
            message.to = "{0} <{1}>".format("Website Company Page", "partner@aiesec.my")
            message.html = self.request.get('body')
            
            message.send()
            self.response.out.write("Done Operation!")
        else:
            self.response.out.write("Failed Operation!")

app = webapp2.WSGIApplication([
    ('/company', CompanyHandler)
], debug=True)
