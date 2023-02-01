
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior || {};

/**
 * Behavior generated from Marching squares painter
 */
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior = class MarchingSquaresBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.AreaLeftBound = behaviorData.AreaLeftBound !== undefined ? behaviorData.AreaLeftBound : Number("0") || 0;
    this._behaviorData.AreaTopBound = behaviorData.AreaTopBound !== undefined ? behaviorData.AreaTopBound : Number("0") || 0;
    this._behaviorData.AreaRightBound = behaviorData.AreaRightBound !== undefined ? behaviorData.AreaRightBound : Number("0") || 0;
    this._behaviorData.AreaBottomBound = behaviorData.AreaBottomBound !== undefined ? behaviorData.AreaBottomBound : Number("0") || 0;
    this._behaviorData.CellWidth = behaviorData.CellWidth !== undefined ? behaviorData.CellWidth : Number("20") || 0;
    this._behaviorData.CellHeight = behaviorData.CellHeight !== undefined ? behaviorData.CellHeight : Number("20") || 0;
    this._behaviorData.FillOutside = behaviorData.FillOutside !== undefined ? behaviorData.FillOutside : false;
    this._behaviorData.Threshold = behaviorData.Threshold !== undefined ? behaviorData.Threshold : Number("1") || 0;
    this._behaviorData.MustOnlyDrawScreen = behaviorData.MustOnlyDrawScreen !== undefined ? behaviorData.MustOnlyDrawScreen : false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.AreaLeftBound !== newBehaviorData.AreaLeftBound)
      this._behaviorData.AreaLeftBound = newBehaviorData.AreaLeftBound;
    if (oldBehaviorData.AreaTopBound !== newBehaviorData.AreaTopBound)
      this._behaviorData.AreaTopBound = newBehaviorData.AreaTopBound;
    if (oldBehaviorData.AreaRightBound !== newBehaviorData.AreaRightBound)
      this._behaviorData.AreaRightBound = newBehaviorData.AreaRightBound;
    if (oldBehaviorData.AreaBottomBound !== newBehaviorData.AreaBottomBound)
      this._behaviorData.AreaBottomBound = newBehaviorData.AreaBottomBound;
    if (oldBehaviorData.CellWidth !== newBehaviorData.CellWidth)
      this._behaviorData.CellWidth = newBehaviorData.CellWidth;
    if (oldBehaviorData.CellHeight !== newBehaviorData.CellHeight)
      this._behaviorData.CellHeight = newBehaviorData.CellHeight;
    if (oldBehaviorData.FillOutside !== newBehaviorData.FillOutside)
      this._behaviorData.FillOutside = newBehaviorData.FillOutside;
    if (oldBehaviorData.Threshold !== newBehaviorData.Threshold)
      this._behaviorData.Threshold = newBehaviorData.Threshold;
    if (oldBehaviorData.MustOnlyDrawScreen !== newBehaviorData.MustOnlyDrawScreen)
      this._behaviorData.MustOnlyDrawScreen = newBehaviorData.MustOnlyDrawScreen;

    return true;
  }

  // Properties:
  
  _getAreaLeftBound() {
    return this._behaviorData.AreaLeftBound !== undefined ? this._behaviorData.AreaLeftBound : Number("0") || 0;
  }
  _setAreaLeftBound(newValue) {
    this._behaviorData.AreaLeftBound = newValue;
  }
  _getAreaTopBound() {
    return this._behaviorData.AreaTopBound !== undefined ? this._behaviorData.AreaTopBound : Number("0") || 0;
  }
  _setAreaTopBound(newValue) {
    this._behaviorData.AreaTopBound = newValue;
  }
  _getAreaRightBound() {
    return this._behaviorData.AreaRightBound !== undefined ? this._behaviorData.AreaRightBound : Number("0") || 0;
  }
  _setAreaRightBound(newValue) {
    this._behaviorData.AreaRightBound = newValue;
  }
  _getAreaBottomBound() {
    return this._behaviorData.AreaBottomBound !== undefined ? this._behaviorData.AreaBottomBound : Number("0") || 0;
  }
  _setAreaBottomBound(newValue) {
    this._behaviorData.AreaBottomBound = newValue;
  }
  _getCellWidth() {
    return this._behaviorData.CellWidth !== undefined ? this._behaviorData.CellWidth : Number("20") || 0;
  }
  _setCellWidth(newValue) {
    this._behaviorData.CellWidth = newValue;
  }
  _getCellHeight() {
    return this._behaviorData.CellHeight !== undefined ? this._behaviorData.CellHeight : Number("20") || 0;
  }
  _setCellHeight(newValue) {
    this._behaviorData.CellHeight = newValue;
  }
  _getFillOutside() {
    return this._behaviorData.FillOutside !== undefined ? this._behaviorData.FillOutside : false;
  }
  _setFillOutside(newValue) {
    this._behaviorData.FillOutside = newValue;
  }
  _getThreshold() {
    return this._behaviorData.Threshold !== undefined ? this._behaviorData.Threshold : Number("1") || 0;
  }
  _setThreshold(newValue) {
    this._behaviorData.Threshold = newValue;
  }
  _getMustOnlyDrawScreen() {
    return this._behaviorData.MustOnlyDrawScreen !== undefined ? this._behaviorData.MustOnlyDrawScreen : false;
  }
  _setMustOnlyDrawScreen(newValue) {
    this._behaviorData.MustOnlyDrawScreen = newValue;
  }
}

/**
 * Shared data generated from Marching squares painter
 */
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.SharedData = class MarchingSquaresBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._MarchingSquares_MarchingSquaresBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._MarchingSquares_MarchingSquaresBehaviorSharedData = new gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._MarchingSquares_MarchingSquaresBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.userFunc0x7f3978 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

for (const object of objects) {
  const behavior = object.getBehavior(behaviorName);

  /** @type {float} */
  const left = behavior._getAreaLeftBound();
  /** @type {float} */
  const top = behavior._getAreaTopBound();
  /** @type {float} */
  const right = behavior._getAreaRightBound() || game.getGameResolutionWidth();
  /** @type {float} */
  const bottom = behavior._getAreaBottomBound() || game.getGameResolutionHeight();
  /** @type {float} */
  const cellWidth = behavior._getCellWidth();
  /** @type {float} */
  const cellHeight = behavior._getCellHeight();

  // Build the scalar field
  const dimX = 1 + Math.ceil((right - left) / cellWidth);
  const dimY = 1 + Math.ceil((bottom - top) / cellHeight);

  /** @type {Array<number[]>} */
  const fieldValues = new Array(dimY);
  for (var y = 0; y < dimY; y++) {
    fieldValues[y] = new Array(dimX).fill(0);
  }
  behavior.scalarFieldValues = fieldValues;

  const prototype = Object.getPrototypeOf(behavior);
  if (!prototype.convertToGridBasisX) {
    const South = 0;
    const East = 1;
    const North = 2;
    const West = 3;
    const SouthWest = 4;
    const SouthEast = 5;
    const NorthEast = 6;
    const NorthWest = 7;

    const SouthWestMask = 1;
    const SouthEastMask = 2;
    const NorthEastMask = 4;
    const NorthWestMask = 8;

    gdjs.__marchingSquares = {
      parseOperation: function (operation) {
        switch (operation) {
          case "Addition":
            return (value1, value2) => value1 + value2;
          case "Subtraction":
            return (value1, value2) => value1 - value2;
          case "Minimum":
            return Math.min;
          case "Maximum":
          default:
            return Math.max;
        }
        return;
      }
    };

    /** {FloatPoint} Avoid memory allocations when returning points */
    prototype.workingPoint = [0, 0];
    prototype.marchingSquaresFillVertices = [
      [],
      [South, West, SouthWest],
      [East, South, SouthEast],
      [East, West, SouthWest, SouthEast],

      [North, East, NorthEast],
      [
        South,
        SouthWest,
        West,
        North,
        NorthEast,
        East,
      ],
      [South, North, NorthEast, SouthEast],
      [West, North, NorthEast, SouthEast, SouthWest],

      [West, North, NorthWest],
      [North, South, SouthWest, NorthWest],
      [
        South,
        West,
        NorthWest,
        North,
        East,
        SouthEast,
      ],
      [North, East, SouthEast, SouthWest, NorthWest],

      [East, West, NorthWest, NorthEast],
      [East, South, SouthWest, NorthWest, NorthEast],
      [South, West, NorthWest, NorthEast, SouthEast],
      [],
    ];
    prototype.marchingSquaresOutlineVertices = [
      [[]],
      [[South, West]],
      [[East, South]],
      [[East, West]],

      [[North, East]],
      [
        [East, South],
        [West, North]
      ],
      [[South, North]],
      [[West, North]],

      [[West, North]],
      [[North, South]],
      [
        [South, West],
        [North, East]
      ],
      [[North, East]],

      [[East, West]],
      [[East, South]],
      [[South, West]],
      [[]],
    ];

    /**
     * @param x {float} in the scene basis
     * @return {float} x in the grid basis
     */
    prototype.convertToGridBasisX = function (x) {
      return (x - this._getAreaLeftBound()) / this._getCellWidth();
    }

    /**
     * @param y {float} in the scene basis
     * @return {float} y in the grid basis
     */
    prototype.convertToGridBasisY = function (y) {
      return (y - this._getAreaTopBound()) / this._getCellHeight();
    }

    /**
     * @param x {float} in the grid basis
     * @return {float} x in the scene basis
     */
    prototype.convertFromGridBasisX = function (x) {
      return x * this._getCellWidth() + this._getAreaLeftBound();
    }

    /**
     * @param y {float} in the grid basis
     * @return {float} y in the scene basis
     */
    prototype.convertFromGridBasisY = function (y) {
      return y * this._getCellHeight() + this._getAreaTopBound();
    }

    /**
     * @return {integer} grid dimension on y
     */
    prototype.dimY = function () {
      return this.scalarFieldValues.length;
    }

    /**
     * @return {integer} grid dimension on y
     */
    prototype.dimX = function () {
      const firstColumn = this.scalarFieldValues[0];
      return firstColumn ? firstColumn.length : 0;
    }

    /**
     * @param x {integer} the square top in the grid
     * @param y {integer} the square left in the grid
     * @return {integer} one of the 16 marching squares cases
     */
    prototype.getSquareIndex = function (x, y) {
      /** @type {float} */
      const threshold = this._getThreshold();
      let squareIndex = 0;
      if (this.scalarFieldValues[y + 1][x] > threshold) {
        squareIndex |= SouthWestMask;
      }
      if (this.scalarFieldValues[y + 1][x + 1] > threshold) {
        squareIndex |= SouthEastMask;
      }
      if (this.scalarFieldValues[y][x + 1] > threshold) {
        squareIndex |= NorthEastMask;
      }
      if (this.scalarFieldValues[y][x] > threshold) {
        squareIndex |= NorthWestMask;
      }
      return squareIndex;
    }

    /**
     * @param side {integer} point location
     * @param indexX {integer} the square top in the grid
     * @param indexY {integer} the square left in the grid
     * @param point {FloatPoint} is the result
     */
    prototype.calcPoint = function (
      side,
      indexX,
      indexY,
      point
    ) {
      let gridX = 0;
      let gridY = 0;

      switch (side) {
        case South:
          gridY = indexY + 1;
          gridX = this.betweenX(indexX, gridY, indexX + 1, gridY);
          break;

        case East:
          gridX = indexX + 1;
          gridY = this.betweenY(gridX, indexY, gridX, indexY + 1);
          break;

        case North:
          gridY = indexY;
          gridX = this.betweenX(indexX, gridY, indexX + 1, gridY);
          break;

        case West:
          gridX = indexX;
          gridY = this.betweenY(gridX, indexY, gridX, indexY + 1);
          break;

        case SouthWest:
          gridX = indexX;
          gridY = indexY + 1;
          break;

        case SouthEast:
          gridX = indexX + 1;
          gridY = indexY + 1;
          break;

        case NorthEast:
          gridX = indexX + 1;
          gridY = indexY;
          break;

        case NorthWest:
          gridX = indexX;
          gridY = indexY;
          break;
      }

      point[0] = this.convertFromGridBasisX(gridX);
      point[1] = this.convertFromGridBasisY(gridY);
    }

    /**
     * Returns the mean between 2 corners weighted by their field value.
     * @param indexX1 {integer} first corner x
     * @param indexY1 {integer} first corner y
     * @param indexX2 {integer} second corner x
     * @param indexY2 {integer} second corner y
     * @return {float} x in the grid
     */
    prototype.betweenX = function (
      indexX1,
      indexY1,
      indexX2,
      indexY2
    ) {
      const value1 = this.scalarFieldValues[indexY1][indexX1];
      const value2 = this.scalarFieldValues[indexY2][indexX2];

      /** @type {float} */
      const threshold = this._getThreshold();
      const wight1 = Math.abs(value1 - threshold);
      const wight2 = Math.abs(value2 - threshold);

      return (wight2 * indexX1 + wight1 * indexX2) / (wight1 + wight2);
    }

    /**
     * Returns the mean between 2 corners weighted by their field value.
     * @param indexX1 {integer} first corner x
     * @param indexY1 {integer} first corner y
     * @param indexX2 {integer} second corner x
     * @param indexY2 {integer} second corner y
     * @return {float} y in the grid
     */
    prototype.betweenY = function (
      indexX1,
      indexY1,
      indexX2,
      indexY2
    ) {
      const value1 = this.scalarFieldValues[indexY1][indexX1];
      const value2 = this.scalarFieldValues[indexY2][indexX2];

      /** @type {float} */
      const threshold = this._getThreshold();
      const weight1 = Math.abs(value1 - threshold);
      const weight2 = Math.abs(value2 - threshold);

      return (weight2 * indexY1 + weight1 * indexY2) / (weight1 + weight2);
    }

    /**
     * @param pointX {float} in scene basis
     * @param pointY {float} in scene basis
     * @return {float} true if the point is inside the contour
     */
    prototype.getFieldValue = function (
      pointX,
      pointY,
    ) {
      /** @type {Array<number[]>} */
      const fieldValues = this.scalarFieldValues;

      const x = this.convertToGridBasisX(pointX);
      const y = this.convertToGridBasisY(pointY);

      const squareX = Math.floor(x);
      const squareY = Math.floor(y);

      if (squareX < 0 || squareY < 0 || squareX >= behavior.dimX() || squareY >= behavior.dimY()) {
        return 0;
      }

      // Extrapolate
      let weigtedValueSum = 0;
      let weightSum = 0;
      for (let vertexX = squareX; vertexX <= squareX + 1; vertexX++) {
        for (let vertexY = squareY; vertexY <= squareY + 1; vertexY++) {
          const value = fieldValues[squareY][squareX];
          const dx = vertexX - x;
          const dy = vertexY - y;
          if (dx === 0 && dx === 0) {
            return value;
          }
          else {
            const distance = Math.hypot(dx, dy);
            weigtedValueSum += value / distance;
            weightSum += 1 / distance;
          }
        }
      }
      const mean = weigtedValueSum / weightSum;
      return mean;
    }

    /**
     * @param pointX {float} in scene basis
     * @param pointY {float} in scene basis
     * @return {boolean} true if the point is inside the contour
     */
    prototype.containsPoint = function (
      pointX,
      pointY,
    ) {
      // It's more precise than the contour
      // so not very accurate
      return this.getFieldValue(pointX, pointY) > this._getThreshold();
    }


    /**
     * Draw the field squares
     * @param minX {integer} left
     * @param minY {integer} top
     * @param maxX {integer} right
     * @param maxY {integer} bottom
     */
    prototype.drawField = function (
      minX,
      minY,
      maxX,
      maxY
    ) {
      /** @type {boolean} */
      const drawUnder = this._getFillOutside();

      /** @type {Array<number[]>} */
      const fieldValues = this.scalarFieldValues;

      const point = this.workingPoint;

      const shapePainter = this.owner;

      const fillOpacity = shapePainter.getFillOpacity();
      const outlineSize = shapePainter.getOutlineSize();

      // It draws bands and small polygons.
      // The coutline is in a second loop, it's more efficient
      // than switching the style constently.

      // fill
      if (fillOpacity !== 0) {
        shapePainter.setOutlineSize(0);
        for (let squareY = minY; squareY < maxY - 1; squareY++) {
          let first15SquareX = -1;
          for (let squareX = minX; squareX < maxX - 1; squareX++) {
            let squareIndex = this.getSquareIndex(squareX, squareY);
            if (drawUnder) {
              squareIndex = 15 - squareIndex;
            }

            if (first15SquareX === -1 && squareIndex === 15) {
              first15SquareX = squareX;
            }
            if (first15SquareX !== -1) {
              if (squareIndex !== 15) {
                shapePainter.drawRectangle(
                  this.convertFromGridBasisX(first15SquareX),
                  this.convertFromGridBasisY(squareY),
                  this.convertFromGridBasisX(squareX),
                  this.convertFromGridBasisY(squareY + 1)
                );
                first15SquareX = -1;
              }
              else if (squareX === maxX - 2) {
                shapePainter.drawRectangle(
                  this.convertFromGridBasisX(first15SquareX),
                  this.convertFromGridBasisY(squareY),
                  this.convertFromGridBasisX(squareX + 1),
                  this.convertFromGridBasisY(squareY + 1)
                );
                first15SquareX = -1;
              }
            }
            if (squareIndex !== 0) {
              let fillVertices = this.marchingSquaresFillVertices[squareIndex];
              this.calcPoint(fillVertices[0], squareX, squareY, point);
              shapePainter.beginFillPath(point[0], point[1]);
              for (let index = 1; index < fillVertices.length; index++) {
                this.calcPoint(fillVertices[index], squareX, squareY, point);
                shapePainter.drawPathLineTo(point[0], point[1]);
              }
              shapePainter.closePath();
              shapePainter.endFillPath();
            }
          }
        }
        shapePainter.setOutlineSize(outlineSize);
      }
      // outline
      if (outlineSize !== 0) {
        shapePainter.setFillOpacity(0);
        for (let squareY = minY; squareY < maxY - 1; squareY++) {
          for (let squareX = minX; squareX < maxX - 1; squareX++) {
            let squareIndex = this.getSquareIndex(squareX, squareY);
            if (drawUnder) {
              squareIndex = 15 - squareIndex;
            }

            if (squareIndex !== 0 && squareIndex !== 15) {
              for (let outlineVertices of this.marchingSquaresOutlineVertices[squareIndex]) {
                this.calcPoint(outlineVertices[0], squareX, squareY, point);
                shapePainter.beginFillPath(point[0], point[1]);
                for (let index = 1; index < outlineVertices.length; index++) {
                  this.calcPoint(outlineVertices[index], squareX, squareY, point);
                  shapePainter.drawPathLineTo(point[0], point[1]);
                }
                shapePainter.endFillPath();
              }
            }
          }
        }
        shapePainter.setFillOpacity(fillOpacity);
      }
    }
  }
}

};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.userFunc0x7f3978(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.userFunc0x7f3978 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

for (const object of objects) {
    const behavior = object.getBehavior(behaviorName);

    /** @type {float} */
    const left = behavior._getAreaLeftBound();
    /** @type {float} */
    const top = behavior._getAreaTopBound();
    /** @type {float} */
    const right = behavior._getAreaRightBound() || game.getGameResolutionWidth();
    /** @type {float} */
    const bottom = behavior._getAreaBottomBound() || game.getGameResolutionHeight();
    /** @type {float} */
    const cellWidth = behavior._getCellWidth();
    /** @type {float} */
    const cellHeight = behavior._getCellHeight();

    const dimX = 1 + Math.ceil((right - left) / cellWidth);
    const dimY = 1 + Math.ceil((bottom - top) / cellHeight);

    const oldDimX = behavior.dimX();
    const oldDimY = behavior.dimY();

    /** @type {Array<number[]>} */
    const fieldValues = behavior.scalarFieldValues;

    // Update the grid dimension if properties changed.
    if (dimY !== oldDimY) {
        fieldValues.length = dimY;
    }
    for (let y = oldDimY; y < dimY; y++) {
        fieldValues[y] = new Array(dimX);
    }
    if (dimX !== behavior.dimX()) {
        for (let rowValues of fieldValues) {
            rowValues.length = dimX;
        }
    }

    // Fill the grid with 0
    for (let rowValues of fieldValues) {
        for (let x = 0; x < rowValues.length; x++) {
            rowValues[x] = 0;
        }
    }
}
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.userFunc0x7f3978(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearField = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.userFunc0x7f3978 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const centerX = eventsFunctionContext.getArgument("CenterX");
const centerY = eventsFunctionContext.getArgument("CenterY");
const radius = eventsFunctionContext.getArgument("Radius");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");
const cappingRadius = cappingRadiusRatio * radius;

for (const object of objects) {
  const behavior = object.getBehavior(behaviorName);

  /** @type {float} */
  const cellWidth = behavior._getCellWidth();
  /** @type {float} */
  const cellHeight = behavior._getCellHeight();

  /** @type {Array<number[]>} */
  const fieldValues = behavior.scalarFieldValues;

  /** @type {float} */
  const cX = behavior.convertToGridBasisX(centerX);
  /** @type {float} */
  const cY = behavior.convertToGridBasisY(centerY);
  const minX = Math.max(
    0,
    Math.floor(behavior.convertToGridBasisX(centerX - cappingRadius))
  );
  const minY = Math.max(
    0,
    Math.floor(behavior.convertToGridBasisY(centerY - cappingRadius))
  );
  const maxX = Math.min(
    behavior.dimX() - 1,
    Math.ceil(behavior.convertToGridBasisX(centerX + cappingRadius))
  );
  const maxY = Math.min(
    behavior.dimY() - 1,
    Math.ceil(behavior.convertToGridBasisY(centerY + cappingRadius))
  );

  const radiusSq = (radius * radius / cellWidth / cellWidth);
  for (let y = minY; y <= maxY; y++) {
    const rowValues = fieldValues[y];
    for (let x = minX; x <= maxX; x++) {
      const dx = x - cX;
      const dy = y - cY;
      const distanceSq = dx * dx + dy * dy;
      rowValues[x] = Math.min(
        rowValues[x],
        distanceSq / radiusSq
      );
    }
  }
}
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.userFunc0x7f3978(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDisk = function(CenterX, CenterY, Radius, CappingRadiusRatio, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CenterX") return CenterX;
if (argName === "CenterY") return CenterY;
if (argName === "Radius") return Radius;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.userFunc0x6d4300 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const centerX = eventsFunctionContext.getArgument("CenterX");
const centerY = eventsFunctionContext.getArgument("CenterY");
const radius = eventsFunctionContext.getArgument("Radius");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");
const cappingRadius = cappingRadiusRatio * radius;
const operation = gdjs.__marchingSquares.parseOperation(eventsFunctionContext.getArgument("Operation"));


for (const object of objects) {
  const behavior = object.getBehavior(behaviorName);

  /** @type {float} */
  const cellWidth = behavior._getCellWidth();
  /** @type {float} */
  const cellHeight = behavior._getCellHeight();

  /** @type {Array<number[]>} */
  const fieldValues = behavior.scalarFieldValues;

  /** @type {float} */
  const cX = behavior.convertToGridBasisX(centerX);
  /** @type {float} */
  const cY = behavior.convertToGridBasisY(centerY);
  const minX = Math.max(
    0,
    Math.floor(behavior.convertToGridBasisX(centerX - cappingRadius))
  );
  const minY = Math.max(
    0,
    Math.floor(behavior.convertToGridBasisY(centerY - cappingRadius))
  );
  const maxX = Math.min(
    behavior.dimX() - 1,
    Math.ceil(behavior.convertToGridBasisX(centerX + cappingRadius))
  );
  const maxY = Math.min(
    behavior.dimY() - 1,
    Math.ceil(behavior.convertToGridBasisY(centerY + cappingRadius))
  );

  const radiusSq = (radius * radius / cellWidth / cellWidth);
  for (let y = minY; y <= maxY; y++) {
    const rowValues = fieldValues[y];
    for (let x = minX; x <= maxX; x++) {
      const dx = x - cX;
      const dy = y - cY;
      const distanceSq = dx * dx + dy * dy;
      if (distanceSq == 0) {
        rowValues[x] = Number.MAX_VALUE;
      } else {
        rowValues[x] = operation(
          rowValues[x],
          radiusSq / distanceSq
        );
      }
    }
  }
}
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.userFunc0x6d4300(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDisk = function(CenterX, CenterY, Radius, CappingRadiusRatio, Operation, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CenterX") return CenterX;
if (argName === "CenterY") return CenterY;
if (argName === "Radius") return Radius;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
if (argName === "Operation") return Operation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDFieldObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.userFunc0x7f3978 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const fieldObjects = eventsFunctionContext.getObjects("FieldObject");
const fieldBehaviorName = eventsFunctionContext.getArgument("FieldBehavior");
const operation = gdjs.__marchingSquares.parseOperation(eventsFunctionContext.getArgument("Operation"));

for (const fieldObject of fieldObjects) {
    const otherBehavior = fieldObject.getBehavior(behaviorName);
    if (!otherBehavior) {
        break;
    }
    const otherFieldValues = otherBehavior.scalarFieldValues;

    for (const object of objects) {
        const behavior = object.getBehavior(behaviorName);

        /** @type {Array<number[]>} */
        const fieldValues = behavior.scalarFieldValues;

        for (let y = 0; y < fieldValues.length; y++) {
            const thisRowValues = fieldValues[y];
            const otherRowValues = otherFieldValues[y];
            for (let x = 0; x < thisRowValues.length; x++) {
                thisRowValues[x] = operation(thisRowValues[x], otherRowValues[x]);
            }
        }
    }
}
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.userFunc0x7f3978(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeField = function(FieldObject, FieldBehavior, Operation, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FieldObject": FieldObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "FieldObject": gdjs.objectsListsToArray(FieldObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "FieldBehavior": FieldBehavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Operation") return Operation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDFieldObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.userFunc0x7f3978 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const screenWidth = runtimeScene.getGame().getGameResolutionWidth();
const screenHeight = runtimeScene.getGame().getGameResolutionWidth();

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

for (const object of objects) {
    const behavior = object.getBehavior(behaviorName);

    if (behavior._behaviorData.MustOnlyDrawScreen) {
        const layer = runtimeScene.getLayer(object.getLayer());
        const screen1 = layer.convertCoords(0, 0);
        const screen2 = layer.convertCoords(screenWidth, 0);
        const screen3 = layer.convertCoords(0, screenHeight);
        const screen4 = layer.convertCoords(screenWidth, screenHeight);

        const screenLeft = Math.min(screen1[0], screen2[0], screen3[0], screen4[0]);
        const screenTop = Math.min(screen1[1], screen2[1], screen3[1], screen4[1]);
        const screenRight = Math.max(screen1[0], screen2[0], screen3[0], screen4[0]);
        const screenBottom = Math.max(screen1[1], screen2[1], screen3[1], screen4[1]);

        const minX = Math.max(0, Math.floor(behavior.convertToGridBasisX(screenLeft)));
        const minY = Math.max(0, Math.floor(behavior.convertToGridBasisY(screenTop)));
        // I don't know why the + 1 is needed
        const maxX = Math.min(behavior.dimX(), 1 + Math.ceil(behavior.convertToGridBasisX(screenRight)));
        const maxY = Math.min(behavior.dimY(), Math.ceil(behavior.convertToGridBasisY(screenBottom)));

        behavior.drawField(minX, minY, maxX, maxY);
    }
    else {
        // This is useful for static content or games without scrolling.
        behavior.drawField(0, 0, behavior.dimX(), behavior.dimY());
    }
}
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.userFunc0x7f3978(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawField = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCellWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidth = function(CellWidth, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CellWidth") return CellWidth;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCellHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeight = function(CellHeight, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CellHeight") return CellHeight;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFillOutside(false);
}
}}

}


{


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.conditionTrue_1 = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition0IsTrue_0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("FillOutside") : false);
}
}if (gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFillOutside(true);
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutside = function(FillOutside, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "FillOutside") return FillOutside;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThreshold((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Threshold")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThreshold = function(Threshold, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Threshold") return Threshold;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaLeftBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LeftBound")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaLeftBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TopBound")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaLeftBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RightBound")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaLeftBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BottomBound")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBounds = function(LeftBound, TopBound, RightBound, BottomBound, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "LeftBound") return LeftBound;
if (argName === "TopBound") return TopBound;
if (argName === "RightBound") return RightBound;
if (argName === "BottomBound") return BottomBound;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCellWidth()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidth = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCellHeight()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThreshold()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThreshold = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.userFunc0x7f3978 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.getFieldValue(pointX, pointY);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.userFunc0x7f3978(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValue = function(PointX, PointY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1);

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFillOutside() ) {
        gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1[k] = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutside = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.userFunc0x7f3978 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");
const value = eventsFunctionContext.getArgument("Value");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.getFieldValue(pointX, pointY) > value;
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.userFunc0x7f3978(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValue = function(PointX, PointY, Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.userFunc0x7f3978 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.containsPoint(pointX, pointY);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.userFunc0x7f3978(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPoint = function(PointX, PointY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("MarchingSquares::MarchingSquaresBehavior", gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior);
