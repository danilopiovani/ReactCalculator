import {React, useState}  from 'react'

/* Packages */
import { Container, Row, Col, Table} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import { orange, grey, brown, purple, teal, lightBlue, pink } from '@material-ui/core/colors';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

/* CSS */
import '../../style/Calculator.css';


/* Components */
import CalculatorKeybord from "./CalculatorKeybord";

/* Material Ui */
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },      
    },   
    orange: {
      color: orange[50],
      backgroundColor: orange[500],
      margin: "auto",
    },
    orange50: {
        color: theme.palette.getContrastText(orange[50]),
        backgroundColor: orange[50],
        margin: "auto",
    },
    grey: {
      color: theme.palette.getContrastText(grey[200]),
      backgroundColor: grey[200],
      margin: "auto",
    },
    greyT: {
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: "#212529",
        margin: "auto",
        borderColor:"#373b3e",
    },
    greyD: {
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        margin: "auto",
    },
    greyLarge: {
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        width: "100%",
        margin: "auto",
        textAlign:"left",
    },

    brownT:{
        color: theme.palette.getContrastText(brown[800]),
        backgroundColor: brown[800],
        margin: "auto",
        borderColor: brown[700],
    },
    brownD:{
        color: theme.palette.getContrastText(brown[800]),
        backgroundColor: brown[900],
        margin: "auto",
    },
    brownLarge:{
        color: theme.palette.getContrastText(brown[900]),
        backgroundColor: brown[900],
        margin: "auto",
        width: "100%",
        textAlign:"left",
    },
    blueT:{
        color: theme.palette.getContrastText(lightBlue[800]),
        backgroundColor: lightBlue[800],
        margin: "auto",
        borderColor:lightBlue[700],
    },
    blueD:{
        color: theme.palette.getContrastText(lightBlue[900]),
        backgroundColor: lightBlue[900],
        margin: "auto",
    },
    blueLarge:{
        color: theme.palette.getContrastText(lightBlue[900]),
        backgroundColor: lightBlue[900],
        margin: "auto",
        width: "100%",
        textAlign:"left",
    },
    greenT:{
        color: theme.palette.getContrastText(teal[800]),
        backgroundColor: teal[800],
        margin: "auto",
        borderColor: teal[700],
    },
    greenD:{
        color: theme.palette.getContrastText(teal[900]),
        backgroundColor: teal[900],
        margin: "auto",
    },
    greenLarge:{
        color: theme.palette.getContrastText(teal[900]),
        backgroundColor: teal[900],
        margin: "auto",
        width: "100%",
        textAlign:"left",
    },
    purpleT:{
        color: theme.palette.getContrastText(purple[800]),
        backgroundColor: purple[800],
        margin: "auto",
        borderColor:purple[700],
    },
    purpleD:{
        color: theme.palette.getContrastText(purple[900]),
        backgroundColor: purple[900],
        margin: "auto",
        borderColor:purple[700],
    },
    purpleLarge:{
        color: theme.palette.getContrastText(purple[900]),
        backgroundColor: purple[900],
        margin: "auto",
        width: "100%",
        textAlign:"left",
    },
    pinkT:{
        color: theme.palette.getContrastText(pink[800]),
        backgroundColor: pink[800],
        margin: "auto",
        borderColor:pink[700],
    },
    pinkD:{
        color: theme.palette.getContrastText(pink[900]),
        backgroundColor: pink[900],
        margin: "auto",
        borderColor:pink[700],
    },
    pinkLarge:{
        color: theme.palette.getContrastText(pink[900]),
        backgroundColor: pink[900],
        margin: "auto",
        width: "100%",
        textAlign:"left",
    },
  }));

/* Projects Page */
/* Responsibility: =====================================================*/
/* The main Function where call component to render + all Math related  */
/* =====================================================================*/
const Calculator = () => {
    const classes = useStyles();

    const [result, setResult] = useState("");
    const [memoryOperator, setMemoryOperator] = useState("");
    const [currentOperator, setCurrentOperator] = useState("");
    const [memoryEntryValue, setMemoryEntryValue] = useState("");
    const [currentEntryValue, setCurrentEntryValue] = useState("");
    const [entryAuthorized, setEntryAuthorized] = useState(true);
    const [mathFinalized, setMathFinalized] = useState(false);

    const [displayNumber1, setDisplayNumber1] = useState("");
    const [displayNumber2, setDisplayNumber2] = useState("");
    const [displayOperator, setDisplayOperator] = useState("");

    const [calculatorTableColor, setCalculatorTableColor] = useState(classes.greyT);
    const [calculatorTableColorNumbers, setCalculatorTableColorNumbers] = useState(classes.greyD);
    const [calculatorTableColor0, setCalculatorTableColor0] = useState(classes.greyLarge);
    const [calculatorTableColorOpSide, setCalculatorTableColorOpSide] = useState(classes.orange);
    const [calculatorTableColorOpSidePressed, setCalculatorTableColorOpSidePressed] = useState(classes.orange50);
    const [calculatorTableColorOpTop, setCalculatorTableColorOpTop] = useState(classes.grey);
    const [arrayColors, setArrayColors] = useState([
        { colorID: "0", calculatorTableColor: classes.greyT, calculatorTableColorNumbers: classes.greyD, calculatorTableColor0: classes.greyLarge, calculatorTableColorOpSide: classes.orange, calculatorTableColorOpSidePressed: classes.orange50, calculatorTableColorOpTop: classes.grey },
        { colorID: "1", calculatorTableColor: classes.pinkT, calculatorTableColorNumbers: classes.pinkD, calculatorTableColor0: classes.pinkLarge, calculatorTableColorOpSide: classes.orange, calculatorTableColorOpSidePressed: classes.orange50, calculatorTableColorOpTop: classes.grey },
        { colorID: "2", calculatorTableColor: classes.blueT, calculatorTableColorNumbers: classes.blueD, calculatorTableColor0: classes.blueLarge, calculatorTableColorOpSide: classes.orange, calculatorTableColorOpSidePressed: classes.orange50, calculatorTableColorOpTop: classes.grey },
        { colorID: "3", calculatorTableColor: classes.brownT, calculatorTableColorNumbers: classes.brownD, calculatorTableColor0: classes.brownLarge, calculatorTableColorOpSide: classes.orange, calculatorTableColorOpSidePressed: classes.orange50, calculatorTableColorOpTop: classes.grey },
        { colorID: "4", calculatorTableColor: classes.greenT, calculatorTableColorNumbers: classes.greenD, calculatorTableColor0: classes.greenLarge, calculatorTableColorOpSide: classes.orange, calculatorTableColorOpSidePressed: classes.orange50, calculatorTableColorOpTop: classes.grey },
        { colorID: "5", calculatorTableColor: classes.purpleT, calculatorTableColorNumbers: classes.purpleD, calculatorTableColor0: classes.purpleLarge, calculatorTableColorOpSide: classes.orange, calculatorTableColorOpSidePressed: classes.orange50, calculatorTableColorOpTop: classes.grey },
    ]);

    //function called when "| A/C |" is clicked
    const allClean = () => {
        setMemoryEntryValue("");
        setCurrentOperator("");
        setMemoryOperator("");   
        setDisplayNumber1("");
        setDisplayNumber2("");
        setDisplayOperator("");
        //set result and the update the currentEntryValue
        setResult("");
        setCurrentEntryValue(""); 
    }

    //function called when "| % |" is clicked
    const mathPercentage = () => {
        //prepare the number1 and number2 to send to calculatorMachine
        let temNewValue = calculatorMachine(parseFloat(currentEntryValue), parseFloat(100), "/"); 
        setMemoryEntryValue("");
        setMemoryOperator(""); 
        setEntryAuthorized(false);
        setMathFinalized(true);
        setResult(temNewValue);
        setCurrentEntryValue(temNewValue);  
    }

    //function called when "| +/- |" is clicked
    const mathInvert = () => {
        //prepare the number1 and number2 to send to calculatorMachine
        let temNewValue = calculatorMachine(parseFloat(currentEntryValue), parseFloat(-1), "x"); 
        setMemoryEntryValue("");
        setMemoryOperator(""); 
        setEntryAuthorized(false);
        setMathFinalized(true);
        setResult(temNewValue);
        setCurrentEntryValue(temNewValue); 
    }

    // function called when "| = |" is clicked
    // determine the 2 values that will be sent to calculatorMachine to get the result.
    // also clean and update some states 
    const calcLastPress = (operator) => {
        let temNewValue = ""
        let number1 = ""
        let number2 = ""
        let operatorLocal = ""
        //prepare the number1 and number2 to send to calculatorMachine
        //first: check if an calc has been started
        if(memoryOperator !== "") {
            operatorLocal = memoryOperator;
            // verify the circumstances of the click for example if "=" is clicked over and over, 
            // this block identifies the last operator and the last entry data to keep doing the operation.
            if(parseFloat(currentEntryValue) === parseFloat(result)){
                number1 = parseFloat(result);
                if(memoryEntryValue !== ""){
                    number2 = parseFloat(memoryEntryValue);
                }else{
                    number2 = parseFloat(currentEntryValue);
                }
            }else {
                if(result === ""){
                    number1 = parseFloat(memoryEntryValue);
                }else{
                    number1 = parseFloat(result);
                }
                number2 = parseFloat(currentEntryValue);
            }
            temNewValue = calculatorMachine(number1, number2, operatorLocal); 
            if(parseFloat(currentEntryValue) !== parseFloat(result)){ 
                setMemoryEntryValue(currentEntryValue);   
            } 
        }
        setEntryAuthorized(false);
        setMathFinalized(true);
        //set result and the update the currentEntryValue
        setResult(temNewValue);
        setCurrentEntryValue(temNewValue);        
    }

    // responsible to receive 3 parameters and make a simple calc
    // also this function set the display math
    const calculatorMachine = (num1,num2,op)  => {
        setDisplayNumber1(num1);
        setDisplayNumber2(num2);
        setDisplayOperator(op);
        let machineResult = ""        
        switch(op) {
            case '+':
                machineResult = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                machineResult = parseFloat(num1) - parseFloat(num2);
                break;
            case '/':
                machineResult = parseFloat(num1) / parseFloat(num2);
                break;
            case 'x':
                machineResult = parseFloat(num1) * parseFloat(num2);
                break;
                
            default:
        }  
        return parseFloat(machineResult);        
    }

    // Function called when "| / | * | - | + |" are clicked
    // Responsible to set/update the current and memory operator/entry value
    const handleOperator = (operator) => {
        setCurrentOperator(operator);
        setMemoryOperator(operator);
        if(parseFloat(currentEntryValue) === parseFloat(result)){ 
            setMemoryEntryValue("");
        }else{
            setMemoryEntryValue(currentEntryValue);
        }
        setEntryAuthorized(false);
        setMathFinalized(false);
    }

    // Function called when clicked on the "numbers" and "." of the calculator
    // Responsible to check if it is a new interaction or it is part of a current already started operation
    const handleNumbers = (val) => {     
        if(entryAuthorized === true){
            if(currentEntryValue.length <= 8 ){
                setCurrentEntryValue(currentEntryValue + val);         
            }            
        }else{
            setCurrentEntryValue(val);
            setEntryAuthorized(true);
            setMemoryOperator(currentOperator);       
            setCurrentOperator("");
            setDisplayNumber1("");
            setDisplayNumber2("");
            setDisplayOperator("");
            if(mathFinalized){
                setResult("");
                setMathFinalized(false);
            }
        }
    }

    // function to limit the display to show only 9 digits
    const formatDisplay = (val,qtt) => {
        let displayFormated = ""
        displayFormated = val.toString().slice(0,qtt);
        return displayFormated;
    }
    
    const calculatorColor = (colorId) => {
        setCalculatorTableColor(arrayColors[colorId].calculatorTableColor);    
        setCalculatorTableColorNumbers(arrayColors[colorId].calculatorTableColorNumbers);
        setCalculatorTableColor0(arrayColors[colorId].calculatorTableColor0);
        setCalculatorTableColorOpSide(arrayColors[colorId].calculatorTableColorOpSide);
        setCalculatorTableColorOpSidePressed(arrayColors[colorId].calculatorTableColorOpSidePressed);
        setCalculatorTableColorOpTop(arrayColors[colorId].calculatorTableColorOpTop);
    }
    return (
        <Container className="Container_Calculator" fluid>
            <Row xs={12} className="justify-content-center">
                <Col xs={12} md={2}>
                    <Table className={calculatorTableColor}>
                        <tbody>
                            <tr className="ColorRow">
                                <td colSpan="4">
                                    <AvatarGroup max={6} spacing="0" className="AvatarGroup">
                                    {
                                    arrayColors.map((val, key) => {
                                        return(
                                            <Link onClick={() => calculatorColor(val.colorID)} underline="none" Style="cursor:pointer;">
                                                <Avatar className={val.calculatorTableColor}>{` `}</Avatar>
                                            </Link> 
                                        );
                                    })
                                    }
                                    </AvatarGroup>
                                </td>   
                            </tr>
                            <tr>
                                <td colSpan="4"><div className="resultMathDisplay">{`${formatDisplay(displayNumber1,15)} ${displayOperator} ${formatDisplay(displayNumber2,15)}`}<br /></div><div className="resultDisplay">{currentEntryValue ? formatDisplay(currentEntryValue,10) : "0"  }</div></td>
                            </tr>
                            <tr>
                                <td><CalculatorKeybord KeyBoardFunction={allClean} KeyBoardClass={calculatorTableColorOpTop} KeyBoardText="AC" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={mathInvert} KeyBoardClass={calculatorTableColorOpTop} KeyBoardText="+/-" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={mathPercentage} KeyBoardClass={calculatorTableColorOpTop} KeyBoardText="%" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={handleOperator} KeyBoardClass={currentOperator === "/" ?  calculatorTableColorOpSidePressed : calculatorTableColorOpSide} KeyBoardText="/" /></td>
                            </tr>
                            <tr>
                                <td><CalculatorKeybord KeyBoardFunction={handleNumbers} KeyBoardClass={calculatorTableColorNumbers} KeyBoardText="7" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={handleNumbers} KeyBoardClass={calculatorTableColorNumbers} KeyBoardText="8" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={handleNumbers} KeyBoardClass={calculatorTableColorNumbers} KeyBoardText="9" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={handleOperator} KeyBoardClass={currentOperator === "x" ?  calculatorTableColorOpSidePressed : calculatorTableColorOpSide} KeyBoardText="x" /></td>
                            </tr>
                            <tr>
                                <td><CalculatorKeybord KeyBoardFunction={handleNumbers} KeyBoardClass={calculatorTableColorNumbers} KeyBoardText="4" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={handleNumbers} KeyBoardClass={calculatorTableColorNumbers} KeyBoardText="5" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={handleNumbers} KeyBoardClass={calculatorTableColorNumbers} KeyBoardText="6" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={handleOperator} KeyBoardClass={currentOperator === "-" ?  calculatorTableColorOpSidePressed : calculatorTableColorOpSide} KeyBoardText="-" /></td>
                            </tr>
                            <tr>
                                <td><CalculatorKeybord KeyBoardFunction={handleNumbers} KeyBoardClass={calculatorTableColorNumbers} KeyBoardText="1" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={handleNumbers} KeyBoardClass={calculatorTableColorNumbers} KeyBoardText="2" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={handleNumbers} KeyBoardClass={calculatorTableColorNumbers} KeyBoardText="3" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={handleOperator} KeyBoardClass={currentOperator === "+" ?  calculatorTableColorOpSidePressed : calculatorTableColorOpSide} KeyBoardText="+" /></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><CalculatorKeybord KeyBoardFunction={handleNumbers} KeyBoardClass={calculatorTableColor0} KeyBoardText="0" /></td>
                                <td><CalculatorKeybord KeyBoardFunction={handleNumbers} KeyBoardClass={calculatorTableColorNumbers} KeyBoardText="." /></td>
                                <td><CalculatorKeybord KeyBoardFunction={calcLastPress} KeyBoardClass={calculatorTableColorOpSide} KeyBoardText="=" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>        
    )
}

export default Calculator
