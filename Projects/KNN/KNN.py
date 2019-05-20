import csv
import random
import math
import operator


def loadData(filename, split, trainingSet = [], testSet= []):
    with open(filename, 'rt') as csvfile:
        rows = csv.reader(csvfile)
        data = list(rows)
        for x in range(len(data)):
            for y in range(len(data[x])):
                data[x][y] = float(data[x][y])
            if random.random() < split:
                trainingSet.append(data[x])
            else:
                testSet.append(data[x])
        return trainingSet, testSet


def euclidDist(x1, x2):
    dist = 0.0
    for i in range(len(x1) - 1):
        dist += pow((float(x1[i]) - float(x2[i])), 2)
    return math.sqrt(dist)


def knn_predict(test_data, train_data, kval):
    for i in test_data:
        eu_Distance =[]
        knn = []
        good = 0
        bad = 0
        for j in train_data:
            eu_dist = euclidDist(i, j)
            eu_Distance.append((j[len(j) - 1], eu_dist))
            eu_Distance.sort(key=operator.itemgetter(1))
            knn = eu_Distance[:kval]
            for k in knn:
                if k[0] == 0:
                    good += 1
                else:
                    bad += 1
        if good > bad:
            i.append(0)
        elif good < bad:
            i.append(1)



def getAccuracy(testSet):
    correct = 0
    for i in range(len(testSet)):
        if testSet[i][len(testSet[i]) - 2] == testSet[i][len(testSet[i]) - 1]:
            correct += 1
    return (correct/float(len(testSet))) * 100.0


def main():
    trainingSet=[]
    testSet=[]
    split = 0.6
    trainingSet, testSet = loadData('cc.csv', split, trainingSet, testSet)

    print('Train set: ' + repr(len(trainingSet)))
    print('Test set: ' + repr(len(testSet)))

    k = int(math.sqrt(len(testSet)))

    knn_predict(testSet, trainingSet, k)

    print("Accuracy: ", getAccuracy(testSet))


if __name__=="__main__":
    main()







