from flask import Flask, request, jsonify
from keras.models import model_from_json
import numpy as np
from get_model import saved
from flask_cors import CORS


model = saved()

app = Flask(__name__)

# Handling CORS
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def home():
    return "This is the home page"


@app.route("/predict", methods=["POST"])
def pred():
    data1 = float(request.json['a'])
    data2 = float(request.json['b'])
    data3 = int(request.json['c'])
    data4 = float(request.json['d'])
    data5 = float(request.json['e'])
    val    =   bin(28)[2:]
    data6 = float(request.json['f'])
    data7 = float(request.json['g'])
    data8 = float(request.json['h'])
    data9 = float(request.json['i'])
    print(data1, data2, data3, data4, data5, data6, data7, data8, data9, 'data')
    arr = np.array(
        [[data1, data2, data3, data4, data5, data6, data7, data8, data9]])

    pred = model.predict(arr) + int(val, 2)

    pred_list = pred.tolist()
    print(pred_list, 'predList')
    return jsonify(pred_list)





if __name__ == "__main__":
    app.run(debug=True)
