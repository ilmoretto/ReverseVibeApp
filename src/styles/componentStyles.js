import { StyleSheet } from 'react-native';
import { colors } from './colors';

// Estilos específicos para componentes reutilizáveis
export const componentStyles = StyleSheet.create({
  // === CODE CARD ===
  codeCard: {
    backgroundColor: colors.background,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.borderLight,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  codeCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.backgroundDark,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  
  codeCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  
  codeCardDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  
  codeCardToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  codeCardToggleLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginRight: 8,
  },
  
  codeCardContent: {
    padding: 16,
  },
  
  // === CODE DISPLAY ===
  codeContainer: {
    backgroundColor: colors.gray900,
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  
  codeTitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 8,
    fontWeight: '600',
  },
  
  // === CONCEPTS CARD ===
  conceptsCard: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderLeftWidth: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  
  conceptsCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: colors.textPrimary,
  },
  
  // === SYNTAX HIGHLIGHT ===
  syntaxContainer: {
    fontFamily: 'monospace',
    fontSize: 12,
    lineHeight: 18,
  },
  
  syntaxNormal: {
    color: '#d4d4d4', // VS Code light gray
  },
  
  syntaxKeyword: {
    color: '#569cd6', // VS Code blue
    fontWeight: '600',
  },
  
  syntaxComponent: {
    color: '#4ec9b0', // VS Code teal
    fontWeight: '500',
  },
  
  syntaxString: {
    color: '#ce9178', // VS Code orange
  },
  
  syntaxNumber: {
    color: '#b5cea8', // VS Code light green
  },
  
  syntaxComment: {
    color: '#6a9955', // VS Code green
    fontStyle: 'italic',
  },
  
  // === TODO COMPONENTS ===
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    backgroundColor: colors.background,
    minHeight: 60
  },
  
  todoContent: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    flex: 1,
    paddingVertical: 5
  },
  
  todoCheckbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  
  todoCheckboxCompleted: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  
  todoCheckmark: {
    color: colors.textWhite,
    fontSize: 12,
    fontWeight: 'bold'
  },
  
  todoText: {
    fontSize: 16,
    color: colors.textPrimary,
    flex: 1
  },
  
  todoTextCompleted: {
    textDecorationLine: 'line-through',
    color: colors.textMuted
  },
  
  todoActions: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  todoEditButton: {
    backgroundColor: colors.warning,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    marginRight: 6,
    minWidth: 40,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  todoDeleteButton: {
    backgroundColor: colors.error,
    padding: 10,
    borderRadius: 6,
    minWidth: 40,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6
  },
  
  // === CALCULATOR ===
  calculatorDisplay: {
    backgroundColor: colors.gray900,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  
  calculatorDisplayText: {
    fontSize: 32,
    color: colors.textWhite,
    fontWeight: '300',
  },
  
  calculatorButton: {
    flex: 1,
    aspectRatio: 1,
    margin: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray300,
  },
  
  calculatorButtonNumber: {
    backgroundColor: colors.gray200,
  },
  
  calculatorButtonOperator: {
    backgroundColor: colors.navy,
  },
  
  calculatorButtonEquals: {
    backgroundColor: colors.primary,
  },
  
  calculatorButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  
  calculatorButtonTextWhite: {
    color: colors.textWhite,
  },
});