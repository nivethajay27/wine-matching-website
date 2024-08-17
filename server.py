from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
from learning_data import data as learning_data
app = Flask(__name__)


current_id = 1

data = {
    "1":{
        "id": "1",
        "title": "Pick a wine that would go well with beef barbecue. (Drag a wine over meal)",
        "img1": "https://live.staticflickr.com/65535/52011671540_8183019b52_w.jpg",
        "img2": "https://live.staticflickr.com/65535/52011671540_8183019b52_w.jpg",
        "img3": "https://live.staticflickr.com/65535/52011671565_73a370c67e_w.jpg",
        "img4": "https://live.staticflickr.com/65535/52011400669_6f17f6da36_w.jpg",
        "img5": "https://live.staticflickr.com/65535/52011680445_f3929e8de8_w.jpg"
    },
    "2":{
        "id": "2",
        "title": "Pick a wine that would go well with chicken breast steak. (Drag a wine over meal)",
        "img1": "https://live.staticflickr.com/65535/52011671540_8183019b52_w.jpg",
        "img2": "https://live.staticflickr.com/65535/52011671540_8183019b52_w.jpg",
        "img3": "https://live.staticflickr.com/65535/52011671565_73a370c67e_w.jpg",
        "img4": "https://live.staticflickr.com/65535/52011400669_6f17f6da36_w.jpg",
        "img5": "https://live.staticflickr.com/65535/52011680445_f3929e8de8_w.jpg"
    },
    "3":{
        "id": "3",
        "title": "Pick a wine that would go well with chocolate mousse. (Drag a wine over meal)",
        "img1": "https://live.staticflickr.com/65535/52011671540_8183019b52_w.jpg",
        "img2": "https://live.staticflickr.com/65535/52011671540_8183019b52_w.jpg",
        "img3": "https://live.staticflickr.com/65535/52011671565_73a370c67e_w.jpg",
        "img4": "https://live.staticflickr.com/65535/52011400669_6f17f6da36_w.jpg",
        "img5": "https://live.staticflickr.com/65535/52010139052_b135fbb326_w.jpg"
    },
    "4":{
        "id": "4",
        "title": "Pick a wine that would go well with salmon steak. (Drag a wine over meal.)",
        "img1": "https://live.staticflickr.com/65535/52011671540_8183019b52_w.jpg",
        "img2": "https://live.staticflickr.com/65535/52011671540_8183019b52_w.jpg",
        "img3": "https://live.staticflickr.com/65535/52011671565_73a370c67e_w.jpg",
        "img4": "https://live.staticflickr.com/65535/52011400669_6f17f6da36_w.jpg",
        "img5": "https://live.staticflickr.com/65535/52011680425_c747ea7a70.jpg"
    },
}

correctData = {

}
categories_learnt = []

searchData = {}
# ROUTES

@app.route('/hi')
def hello():
   return 'Hi hi hi hi hi hi hi hi hi'


@app.route('/')
def hello_world():
   return render_template('welcome.html', data=data)   


@app.route('/quiz')
def quiz():
    return render_template('quiz.html') 

@app.route('/actualquiz')
def actualquiz():
    return render_template('actualquiz.html', data=data) 


@app.route('/learn/<category>/<id>')
def learn_detail(category, id):
    data = None 
    category_data =  learning_data
    for i in category_data:
        categories_learnt.append(category)
        if i['id'] == id and i['category'] == category:
            data = i
    return render_template('learn_detail.html', data=data,categories_learnt=categories_learnt)

# @app.route('/search/<id>')
# def search(id=None):
#     return render_template('search.html', searchData=searchData, id=id) 



# AJAX FUNCTIONS

# ajax for people.js
@app.route('/actualquiz', methods=['GET', 'POST'])
def search_id():
    global current_id

    # json_data = request.get_json()   
    # id = json_data[current_id] 
    
    
    # searchData.clear()
    # keys = data.keys()
    # for key in keys:
    #     if id.lower() in key.lower():
    #         searchData[key] = data[key]
    # print(searchData)
    #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(searchData = searchData)
 

# @app.route('/view', methods=['GET', 'POST'])
# def view_id():
#     global searchData 
#     json_data = request.get_json()   
#     id2 = json_data["id"] 
#     # print(id2)
    
#     # add new entry to array with 
#     # a new id and the name the user sent in JSON
    
#     searchData.clear()
#     keys = data.keys()
#     for key in keys:
#         if id2.lower() == key.lower():
#             searchData[key] = data[key]
#     # print(searchData)
#     #send back the WHOLE array of data, so the client can redisplay it
#     return jsonify(searchData = searchData)


if __name__ == '__main__':
   app.run(debug = True)




