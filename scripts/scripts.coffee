ejs = require('ejs')
fs = require('fs')
request = require('request')


module.exports = (robot) ->

  # TFM
  robot.respond /Hi/i, (res) ->
    # h/t https://stackoverflow.com/questions/8660659/render-ejs-file-in-node-js
    htmlContent = fs.readFileSync(__dirname + '/views/helpTemplate.ejs', 'utf8');
    htmlRenderized = ejs.render(htmlContent, {filename: 'helpTemplate.ejs'})

    res.send(htmlRenderized);
  # TFM
  robot.respond /I want (.*)/i, (res) ->
    captureGroup = res.match[1]
    cat = captureGroup.toLowerCase()

    robot.http("https://developers.zomato.com/api/v2.1/search?q=#{cat}&count=5&lat=40.739885&lon=-73.990082&radius=500&sort=rating")
      .header('user-key', "4a80bf5c076f368ad4ef9c22d846ee13")
      .get() (err, httpRes, body) ->

        responseData = JSON.parse body
        if responseData.results_found isnt 0
          data = JSON.parse body
          data.search = cat
          # h/t https://stackoverflow.com/questions/8660659/render-ejs-file-in-node-js
          htmlContent = fs.readFileSync(__dirname + '/views/responseTemplate.erb', 'utf8');
          htmlRenderized = ejs.render(htmlContent, {filename: 'responseTemplate.erb', data: data})
          res.send(htmlRenderized);
          console.log(data)
        else
          res.send("Im sorry, there were no #{cat} places near you ;( Try searching for something else!")
  # TFM
  robot.respond /Who a bitch/i, (res) ->
    # h/t https://stackoverflow.com/questions/8660659/render-ejs-file-in-node-js

    res.send("Peter da bitch");
  # TFM
  robot.respond /What is peter/i, (res) ->
    # h/t https://stackoverflow.com/questions/8660659/render-ejs-file-in-node-js

    res.send("a bitch");
  # TFM
  robot.respond /How do you feel about peter/i, (res) ->
    # h/t https://stackoverflow.com/questions/8660659/render-ejs-file-in-node-js

    res.send("I dont like bitches");
  # TFM
  robot.respond /your dad is a whore/i, (res) ->
    # h/t https://stackoverflow.com/questions/8660659/render-ejs-file-in-node-js

    res.send("And you a bitch");


