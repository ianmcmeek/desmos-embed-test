// from https://www.desmos.com/calculator/0u8v4smeha (static snapshot)
var elt = document.getElementById('calculator');
var state = {
    "version": 11,
    "randomSeed": "b9850f1f4a63de9ec9d11a4c602ffa83",
    "graph": {
        "viewport": {
            "xmin": -10,
            "ymin": -6.526375030962841,
            "xmax": 10,
            "ymax": 6.526375030962841
        },
        "showGrid": false,
        "showXAxis": false,
        "showYAxis": false,
        "xAxisNumbers": false,
        "yAxisNumbers": false,
        "polarNumbers": false,
        "__v12ViewportLatexStash": {
            "xmin": "-10",
            "xmax": "10",
            "ymin": "-6.526375030962841",
            "ymax": "6.526375030962841"
        }
    },
    "expressions": {
        "list": [
            {
                "type": "text",
                "id": "17",
                "text": "very rough \"projection\" of 3D points into 2D space"
            },
            {
                "type": "expression",
                "id": "1",
                "color": "#c74440",
                "latex": "g_{et2DPoint}\\left(p\\right)=3.5\\left(p.x+0.5p.y,\\ p.z+0.5p.y\\right)+\\left(0,\\ 2\\right)"
            },
            {
                "id": "5",
                "type": "table",
                "columns": [
                    {
                        "values": [
                            "-1",
                            "-1",
                            "-1",
                            "-1",
                            "1",
                            "1",
                            "1",
                            "1"
                        ],
                        "hidden": true,
                        "id": "3",
                        "color": "#388c46",
                        "latex": "X"
                    },
                    {
                        "values": [
                            "-1",
                            "-1",
                            "1",
                            "1",
                            "-1",
                            "-1",
                            "1",
                            "1"
                        ],
                        "hidden": true,
                        "id": "4",
                        "color": "#6042a6",
                        "latex": "Y"
                    },
                    {
                        "values": [
                            "-1",
                            "1",
                            "-1",
                            "1",
                            "-1",
                            "1",
                            "-1",
                            "1"
                        ],
                        "hidden": true,
                        "id": "6",
                        "color": "#000000",
                        "latex": "Z"
                    }
                ]
            },
            {
                "type": "expression",
                "id": "8",
                "color": "#2d70b3",
                "latex": "P_{cube}=\\left(X,\\ Y,\\ Z\\right)"
            },
            {
                "type": "expression",
                "id": "9",
                "color": "#388c46",
                "latex": "P_{cube2D}=g_{et2DPoint}\\left(P_{cube}\\right)",
                "hidden": true
            },
            {
                "id": "13",
                "type": "table",
                "columns": [
                    {
                        "values": [
                            "1",
                            "2",
                            "4",
                            "3",
                            "5",
                            "6",
                            "8",
                            "7",
                            "1",
                            "2",
                            "3",
                            "4"
                        ],
                        "hidden": true,
                        "id": "11",
                        "color": "#000000",
                        "latex": "E_{1}"
                    },
                    {
                        "values": [
                            "2",
                            "4",
                            "3",
                            "1",
                            "6",
                            "8",
                            "7",
                            "5",
                            "5",
                            "6",
                            "7",
                            "8"
                        ],
                        "hidden": true,
                        "id": "12",
                        "color": "#c74440",
                        "latex": "E_{2}"
                    }
                ]
            },
            {
                "type": "expression",
                "id": "15",
                "color": "#388c46",
                "latex": "P_{olyCubeEdge}=\\operatorname{polygon}\\left(P_{cube2D}\\left[E_{1}\\left[i\\right]\\right],\\ P_{cube2D}\\left[E_{2}\\left[i\\right]\\right]\\right)\\operatorname{for}i=\\left[1...E_{1}.\\operatorname{count}\\right]",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "58",
                "color": "#000000",
                "latex": "P_{olyCubeEdge}\\left[I_{sEdgeFront}=0\\right]"
            },
            {
                "type": "expression",
                "id": "57",
                "color": "#6042a6",
                "latex": "I_{sEdgeFront}=\\left[1,\\ 1,\\ 0,\\ 0,\\ 1,\\ 1,\\ 1,\\ 1,\\ 1,\\ 1,\\ 0,\\ 1\\right]"
            },
            {
                "type": "expression",
                "id": "18",
                "color": "#000000"
            },
            {
                "type": "text",
                "id": "23",
                "text": "spherical coordinates for normal to plane"
            },
            {
                "type": "expression",
                "id": "19",
                "color": "#c74440",
                "latex": "r_{plane}=0",
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "min": "0",
                    "max": "\\frac{2\\sqrt{3}}{2}"
                }
            },
            {
                "type": "text",
                "id": "45",
                "text": "polar angle"
            },
            {
                "type": "expression",
                "id": "20",
                "color": "#2d70b3",
                "latex": "\\theta_{plane}=2.56",
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "min": "0",
                    "max": "\\tau"
                }
            },
            {
                "type": "text",
                "id": "47",
                "text": "azimuthal angle"
            },
            {
                "type": "expression",
                "id": "21",
                "color": "#388c46",
                "latex": "\\phi_{plane}=1",
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "min": "0",
                    "max": "\\pi"
                }
            },
            {
                "type": "expression",
                "id": "24",
                "color": "#000000",
                "latex": "v_{normal}=\\left(\\left(\\sin\\phi_{plane}\\right)\\left(\\cos\\theta_{plane}\\right),\\ \\left(\\sin\\phi_{plane}\\right)\\left(\\sin\\theta_{plane}\\right),\\ \\left(\\cos\\phi_{plane}\\right)\\right)"
            },
            {
                "type": "expression",
                "id": "27",
                "color": "#388c46",
                "latex": "v_{normal}\\cdot\\left(x,\\ y,\\ z\\right)=r_{plane}"
            },
            {
                "type": "expression",
                "id": "31",
                "color": "#2d70b3"
            },
            {
                "type": "expression",
                "id": "51",
                "color": "#000000",
                "latex": "g_{etIntersectionParam}\\left(p_{1},\\ p_{2}\\right)=\\frac{r_{plane}-p_{1}\\cdot v_{normal}}{\\left(p_{2}-p_{1}\\right)\\cdot v_{normal}}"
            },
            {
                "type": "expression",
                "id": "32",
                "color": "#388c46",
                "latex": "T_{edgeIntersectPlane}=g_{etIntersectionParam}\\left(P_{cube}\\left[E_{1}\\right],\\ P_{cube}\\left[E_{2}\\right]\\right)"
            },
            {
                "type": "expression",
                "id": "33",
                "color": "#6042a6",
                "latex": "P_{edgeIntersectPlane}=P_{cube}\\left[E_{1}\\right]+\\left\\{0\\le T_{edgeIntersectPlane}\\le1\\right\\}T_{edgeIntersectPlane}\\left(P_{cube}\\left[E_{2}\\right]-P_{cube}\\left[E_{1}\\right]\\right)"
            },
            {
                "type": "expression",
                "id": "36",
                "color": "#2d70b3",
                "latex": "f_{ilterUniquePoints}\\left(P\\right)=\\operatorname{unique}\\left(\\left(\\operatorname{round}\\left(P.x,\\ 6\\right),\\ \\operatorname{round}\\left(P.y,\\ 6\\right),\\ \\operatorname{round}\\left(P.z,\\ 6\\right)\\right)\\right)"
            },
            {
                "type": "expression",
                "id": "37",
                "color": "#388c46",
                "latex": "f_{ilterDefined}\\left(L\\right)=L\\left[\\left|L\\right|<\\infty\\right]"
            },
            {
                "type": "expression",
                "id": "38",
                "color": "#6042a6",
                "latex": "P_{crossSectionUnordered}=f_{ilterUniquePoints}\\left(f_{ilterDefined}\\left(P_{edgeIntersectPlane}\\right)\\right)"
            },
            {
                "type": "expression",
                "id": "41",
                "color": "#2d70b3",
                "latex": "p_{centroidCrossSection}=\\operatorname{mean}\\left(P_{crossSectionUnordered}\\right)"
            },
            {
                "type": "text",
                "id": "53",
                "text": "current ordering is fine, *iff* plane is not vertical (azimuthal angle not equal to pi over 2)"
            },
            {
                "type": "expression",
                "id": "54",
                "color": "#c74440",
                "latex": "P_{offsetFromCentroid}=P_{crossSectionUnordered}-p_{centroidCrossSection}"
            },
            {
                "type": "expression",
                "id": "55",
                "color": "#2d70b3",
                "latex": "A_{ngleFromCentroid}="
            },
            {
                "type": "expression",
                "id": "42",
                "color": "#388c46",
                "latex": "P_{crossSectionOrdered}=\\operatorname{sort}\\left(P_{crossSectionUnordered},\\ \\operatorname{mod}\\left(\\arctan\\left(p.y,\\ p.x\\right),\\ \\tau\\right)\\right)\\operatorname{with}p=P_{crossSectionUnordered}-p_{centroidCrossSection}"
            },
            {
                "type": "expression",
                "id": "43",
                "color": "#6042a6",
                "latex": "\\operatorname{polygon}\\left(g_{et2DPoint}\\left(P_{crossSectionOrdered}\\right)\\right)",
                "fillOpacity": "0.8"
            },
            {
                "type": "expression",
                "id": "59",
                "color": "#000000",
                "latex": "P_{olyCubeEdge}\\left[I_{sEdgeFront}=1\\right]"
            },
            {
                "type": "expression",
                "id": "60",
                "color": "#000000"
            },
            {
                "type": "expression",
                "id": "66",
                "color": "#6042a6",
                "latex": "X_{slider}=\\left[-3,\\ 3\\right]"
            },
            {
                "type": "expression",
                "id": "69",
                "color": "#000000",
                "latex": "\\left(X_{slider}\\left[1\\right],\\ P_{sliderR}\\left[1\\right].y\\right)",
                "showLabel": true,
                "label": "`r` (shift)",
                "labelOrientation": "left",
                "pointSize": "0",
                "movablePointSize": "0"
            },
            {
                "type": "expression",
                "id": "61",
                "color": "#000000",
                "latex": "P_{sliderR}=\\left(X_{slider},\\ -5\\right)",
                "points": false,
                "lines": true
            },
            {
                "type": "expression",
                "id": "65",
                "color": "#000000",
                "latex": "\\left(X_{slider}\\left[1\\right]+\\frac{r_{plane}}{\\frac{2\\sqrt{3}}{2}}\\left(X_{slider}\\left[2\\right]-X_{slider}\\left[1\\right]\\right),\\ P_{sliderR}\\left[1\\right].y\\right)"
            },
            {
                "type": "expression",
                "id": "70",
                "color": "#000000",
                "latex": "\\left(X_{slider}\\left[1\\right],\\ P_{sliderTheta}\\left[1\\right].y\\right)",
                "showLabel": true,
                "label": "`\\theta` (tilt)",
                "labelOrientation": "left",
                "pointSize": "0",
                "movablePointSize": "0"
            },
            {
                "type": "expression",
                "id": "62",
                "color": "#000000",
                "latex": "P_{sliderTheta}=\\left(X_{slider},\\ -6\\right)",
                "points": false,
                "lines": true
            },
            {
                "type": "expression",
                "id": "67",
                "color": "#000000",
                "latex": "\\left(X_{slider}\\left[1\\right]+\\frac{\\theta_{plane}}{\\tau}\\left(X_{slider}\\left[2\\right]-X_{slider}\\left[1\\right]\\right),\\ P_{sliderTheta}\\left[1\\right].y\\right)"
            },
            {
                "type": "expression",
                "id": "71",
                "color": "#000000",
                "latex": "\\left(X_{slider}\\left[1\\right],\\ P_{sliderPhi}\\left[1\\right].y\\right)",
                "showLabel": true,
                "label": "`\\phi` (turn)",
                "labelOrientation": "left",
                "pointSize": "0",
                "movablePointSize": "0"
            },
            {
                "type": "expression",
                "id": "63",
                "color": "#000000",
                "latex": "P_{sliderPhi}=\\left(X_{slider},\\ -7\\right)",
                "points": false,
                "lines": true
            },
            {
                "type": "expression",
                "id": "68",
                "color": "#000000",
                "latex": "\\left(X_{slider}\\left[1\\right]+\\frac{\\phi_{plane}}{\\pi}\\left(X_{slider}\\left[2\\right]-X_{slider}\\left[1\\right]\\right),\\ P_{sliderPhi}\\left[1\\right].y\\right)"
            }
        ]
    },
    "includeFunctionParametersInRandomSeed": true,
    "doNotMigrateMovablePointStyle": true
};
var calculator = Desmos.GraphingCalculator(elt, {expressions: false});
calculator.setState(state);
