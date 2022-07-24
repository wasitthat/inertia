from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/index.html')
def home_again():
    return render_template('index.html')

@app.route('/news.html')
def news():
    return render_template('news.html')

@app.route('/music.html')
def music():
    return render_template('music.html')

@app.route('/links.html')
def links():
    return render_template('links.html')

@app.route('/videos.html')
def videos():
    return render_template('videos.html')

@app.route('/merch.html')
def merch():
    return render_template('merch.html')

if __name__ == '__main__':
    app.run(debug=True)